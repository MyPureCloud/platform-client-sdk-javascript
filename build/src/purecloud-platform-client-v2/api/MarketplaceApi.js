import ApiClient from '../ApiClient.js';


class MarketplaceApi {
	/**
	 * Marketplace service.
	 * @module purecloud-platform-client-v2/api/MarketplaceApi
	 * @version 178.2.0
	 */

	/**
	 * Constructs a new MarketplaceApi. 
	 * @alias module:purecloud-platform-client-v2/api/MarketplaceApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Delete ad with specified platform and ad type
	 * 
	 * @param {String} platformName 
	 * @param {Object} adType 
	 */
	deleteMarketplaceAdAdType(platformName, adType) { 
		// verify the required parameter 'platformName' is set
		if (platformName === undefined || platformName === null) {
			throw 'Missing the required parameter "platformName" when calling deleteMarketplaceAdAdType';
		}
		// verify the required parameter 'adType' is set
		if (adType === undefined || adType === null) {
			throw 'Missing the required parameter "adType" when calling deleteMarketplaceAdAdType';
		}

		return this.apiClient.callApi(
			'/api/v2/marketplace/ads/{platformName}/{adType}', 
			'DELETE', 
			{ 'platformName': platformName,'adType': adType },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Delete document with specified ID
	 * 
	 * @param {String} documentId 
	 */
	deleteMarketplaceDocument(documentId) { 
		// verify the required parameter 'documentId' is set
		if (documentId === undefined || documentId === null) {
			throw 'Missing the required parameter "documentId" when calling deleteMarketplaceDocument';
		}

		return this.apiClient.callApi(
			'/api/v2/marketplace/documents/{documentId}', 
			'DELETE', 
			{ 'documentId': documentId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Delete document navigation with specified ID
	 * 
	 * @param {String} navigationId 
	 */
	deleteMarketplaceDocumentsNavigation(navigationId) { 
		// verify the required parameter 'navigationId' is set
		if (navigationId === undefined || navigationId === null) {
			throw 'Missing the required parameter "navigationId" when calling deleteMarketplaceDocumentsNavigation';
		}

		return this.apiClient.callApi(
			'/api/v2/marketplace/documents/navigations/{navigationId}', 
			'DELETE', 
			{ 'navigationId': navigationId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Delete an existing enterprise agreement
	 * 
	 * @param {String} enterpriseAgreementId The unique identifier for an enterprise agreement
	 */
	deleteMarketplaceEnterpriseagreement(enterpriseAgreementId) { 
		// verify the required parameter 'enterpriseAgreementId' is set
		if (enterpriseAgreementId === undefined || enterpriseAgreementId === null) {
			throw 'Missing the required parameter "enterpriseAgreementId" when calling deleteMarketplaceEnterpriseagreement';
		}

		return this.apiClient.callApi(
			'/api/v2/marketplace/enterpriseagreements/{enterpriseAgreementId}', 
			'DELETE', 
			{ 'enterpriseAgreementId': enterpriseAgreementId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Delete listing with specified ID
	 * 
	 * @param {String} listingId The unique identifier for a listing
	 */
	deleteMarketplaceListing(listingId) { 
		// verify the required parameter 'listingId' is set
		if (listingId === undefined || listingId === null) {
			throw 'Missing the required parameter "listingId" when calling deleteMarketplaceListing';
		}

		return this.apiClient.callApi(
			'/api/v2/marketplace/listings/{listingId}', 
			'DELETE', 
			{ 'listingId': listingId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Delete all media files and update listing
	 * 
	 * @param {String} listingId 
	 */
	deleteMarketplaceListingMedia(listingId) { 
		// verify the required parameter 'listingId' is set
		if (listingId === undefined || listingId === null) {
			throw 'Missing the required parameter "listingId" when calling deleteMarketplaceListingMedia';
		}

		return this.apiClient.callApi(
			'/api/v2/marketplace/listings/{listingId}/media', 
			'DELETE', 
			{ 'listingId': listingId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Delete media file and update listing.
	 * 
	 * @param {String} listingId 
	 * @param {String} fileName 
	 */
	deleteMarketplaceListingMediaFileName(listingId, fileName) { 
		// verify the required parameter 'listingId' is set
		if (listingId === undefined || listingId === null) {
			throw 'Missing the required parameter "listingId" when calling deleteMarketplaceListingMediaFileName';
		}
		// verify the required parameter 'fileName' is set
		if (fileName === undefined || fileName === null) {
			throw 'Missing the required parameter "fileName" when calling deleteMarketplaceListingMediaFileName';
		}

		return this.apiClient.callApi(
			'/api/v2/marketplace/listings/{listingId}/media/{fileName}', 
			'DELETE', 
			{ 'listingId': listingId,'fileName': fileName },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Delete existing partner
	 * 
	 * @param {String} partnerId 
	 */
	deleteMarketplacePartner(partnerId) { 
		// verify the required parameter 'partnerId' is set
		if (partnerId === undefined || partnerId === null) {
			throw 'Missing the required parameter "partnerId" when calling deleteMarketplacePartner';
		}

		return this.apiClient.callApi(
			'/api/v2/marketplace/partners/{partnerId}', 
			'DELETE', 
			{ 'partnerId': partnerId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Delete existing reseller by partnerId
	 * 
	 * @param {String} partnerId 
	 */
	deleteMarketplaceResellersPartner(partnerId) { 
		// verify the required parameter 'partnerId' is set
		if (partnerId === undefined || partnerId === null) {
			throw 'Missing the required parameter "partnerId" when calling deleteMarketplaceResellersPartner';
		}

		return this.apiClient.callApi(
			'/api/v2/marketplace/resellers/partners/{partnerId}', 
			'DELETE', 
			{ 'partnerId': partnerId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Return ads for a specific platform
	 * 
	 * @param {String} platformName 
	 */
	getMarketplaceAd(platformName) { 
		// verify the required parameter 'platformName' is set
		if (platformName === undefined || platformName === null) {
			throw 'Missing the required parameter "platformName" when calling getMarketplaceAd';
		}

		return this.apiClient.callApi(
			'/api/v2/marketplace/ads/{platformName}', 
			'GET', 
			{ 'platformName': platformName },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Retrieves all ads
	 * 
	 */
	getMarketplaceAds() { 

		return this.apiClient.callApi(
			'/api/v2/marketplace/ads', 
			'GET', 
			{  },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Return a structured hierarchy of available listing categories
	 * 
	 */
	getMarketplaceCategories() { 

		return this.apiClient.callApi(
			'/api/v2/marketplace/categories', 
			'GET', 
			{  },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Retrieves a document by Id
	 * 
	 * @param {String} documentId 
	 */
	getMarketplaceDocument(documentId) { 
		// verify the required parameter 'documentId' is set
		if (documentId === undefined || documentId === null) {
			throw 'Missing the required parameter "documentId" when calling getMarketplaceDocument';
		}

		return this.apiClient.callApi(
			'/api/v2/marketplace/documents/{documentId}', 
			'GET', 
			{ 'documentId': documentId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Retrieves all documents 
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 */
	getMarketplaceDocuments(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/marketplace/documents', 
			'GET', 
			{  },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Retrieves a document navigation by Id
	 * 
	 * @param {String} navigationId 
	 */
	getMarketplaceDocumentsNavigation(navigationId) { 
		// verify the required parameter 'navigationId' is set
		if (navigationId === undefined || navigationId === null) {
			throw 'Missing the required parameter "navigationId" when calling getMarketplaceDocumentsNavigation';
		}

		return this.apiClient.callApi(
			'/api/v2/marketplace/documents/navigations/{navigationId}', 
			'GET', 
			{ 'navigationId': navigationId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Retrieves all document navigations
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 */
	getMarketplaceDocumentsNavigations(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/marketplace/documents/navigations', 
			'GET', 
			{  },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Retrieve an enterprise agreement by Id
	 * 
	 * @param {String} enterpriseAgreementId The unique identifier for an enterprise agreement
	 */
	getMarketplaceEnterpriseagreement(enterpriseAgreementId) { 
		// verify the required parameter 'enterpriseAgreementId' is set
		if (enterpriseAgreementId === undefined || enterpriseAgreementId === null) {
			throw 'Missing the required parameter "enterpriseAgreementId" when calling getMarketplaceEnterpriseagreement';
		}

		return this.apiClient.callApi(
			'/api/v2/marketplace/enterpriseagreements/{enterpriseAgreementId}', 
			'GET', 
			{ 'enterpriseAgreementId': enterpriseAgreementId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Return listing with specified ID
	 * 
	 * @param {String} listingId The unique identifier for a listing
	 */
	getMarketplaceListing(listingId) { 
		// verify the required parameter 'listingId' is set
		if (listingId === undefined || listingId === null) {
			throw 'Missing the required parameter "listingId" when calling getMarketplaceListing';
		}

		return this.apiClient.callApi(
			'/api/v2/marketplace/listings/{listingId}', 
			'GET', 
			{ 'listingId': listingId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Retrieves all listings associated with filters passed in via query param.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.category 
	 * @param {String} opts.subcategory 
	 * @param {String} opts.platform 
	 * @param {Object} opts.brief Brief listing type
	 * @param {Number} opts.pageSize The total page size requested (default to 25)
	 * @param {Number} opts.pageNumber The page number requested (default to 1)
	 * @param {String} opts.sortBy variable name requested to sort by
	 * @param {Array.<String>} opts.expand variable name requested by expand list
	 * @param {String} opts.nextPage next page token
	 * @param {String} opts.previousPage Previous page token
	 */
	getMarketplaceListings(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/marketplace/listings', 
			'GET', 
			{  },
			{ 'category': opts['category'],'subcategory': opts['subcategory'],'platform': opts['platform'],'brief': opts['brief'],'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'nextPage': opts['nextPage'],'previousPage': opts['previousPage'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Return listings with specified Vendor ID
	 * 
	 * @param {String} vendorId The unique identifier for the vendor associated with the listing
	 */
	getMarketplaceListingsVendor(vendorId) { 
		// verify the required parameter 'vendorId' is set
		if (vendorId === undefined || vendorId === null) {
			throw 'Missing the required parameter "vendorId" when calling getMarketplaceListingsVendor';
		}

		return this.apiClient.callApi(
			'/api/v2/marketplace/listings/vendors/{vendorId}', 
			'GET', 
			{ 'vendorId': vendorId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Retrieves a partner by id
	 * 
	 * @param {String} partnerId 
	 */
	getMarketplacePartner(partnerId) { 
		// verify the required parameter 'partnerId' is set
		if (partnerId === undefined || partnerId === null) {
			throw 'Missing the required parameter "partnerId" when calling getMarketplacePartner';
		}

		return this.apiClient.callApi(
			'/api/v2/marketplace/partners/{partnerId}', 
			'GET', 
			{ 'partnerId': partnerId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Retrieves a partner by org id and partner type
	 * 
	 * @param {Object} partnerType 
	 * @param {String} organizationId 
	 */
	getMarketplacePartnerOrganization(partnerType, organizationId) { 
		// verify the required parameter 'partnerType' is set
		if (partnerType === undefined || partnerType === null) {
			throw 'Missing the required parameter "partnerType" when calling getMarketplacePartnerOrganization';
		}
		// verify the required parameter 'organizationId' is set
		if (organizationId === undefined || organizationId === null) {
			throw 'Missing the required parameter "organizationId" when calling getMarketplacePartnerOrganization';
		}

		return this.apiClient.callApi(
			'/api/v2/marketplace/partners/{partnerType}/organizations/{organizationId}', 
			'GET', 
			{ 'partnerType': partnerType,'organizationId': organizationId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Retrieves all partners
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 */
	getMarketplacePartners(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/marketplace/partners', 
			'GET', 
			{  },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Retrieves partners by a search term
	 * 
	 * @param {String} q Search query
	 */
	getMarketplacePartnersSearch(q) { 
		// verify the required parameter 'q' is set
		if (q === undefined || q === null) {
			throw 'Missing the required parameter "q" when calling getMarketplacePartnersSearch';
		}

		return this.apiClient.callApi(
			'/api/v2/marketplace/partners/search', 
			'GET', 
			{  },
			{ 'q': q },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Retrieves a reseller by Id
	 * 
	 * @param {String} resellerId 
	 */
	getMarketplaceReseller(resellerId) { 
		// verify the required parameter 'resellerId' is set
		if (resellerId === undefined || resellerId === null) {
			throw 'Missing the required parameter "resellerId" when calling getMarketplaceReseller';
		}

		return this.apiClient.callApi(
			'/api/v2/marketplace/resellers/{resellerId}', 
			'GET', 
			{ 'resellerId': resellerId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Retrieves all resellers across all organizations.
	 * 
	 */
	getMarketplaceResellers() { 

		return this.apiClient.callApi(
			'/api/v2/marketplace/resellers', 
			'GET', 
			{  },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Retrieves all resellers for the specified organization.
	 * 
	 * @param {String} organizationId 
	 */
	getMarketplaceResellersOrganization(organizationId) { 
		// verify the required parameter 'organizationId' is set
		if (organizationId === undefined || organizationId === null) {
			throw 'Missing the required parameter "organizationId" when calling getMarketplaceResellersOrganization';
		}

		return this.apiClient.callApi(
			'/api/v2/marketplace/resellers/organizations/{organizationId}', 
			'GET', 
			{ 'organizationId': organizationId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Retrieves a review by Id
	 * 
	 * @param {String} reviewId 
	 */
	getMarketplaceReview(reviewId) { 
		// verify the required parameter 'reviewId' is set
		if (reviewId === undefined || reviewId === null) {
			throw 'Missing the required parameter "reviewId" when calling getMarketplaceReview';
		}

		return this.apiClient.callApi(
			'/api/v2/marketplace/reviews/{reviewId}', 
			'GET', 
			{ 'reviewId': reviewId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Update the target url for an ad
	 * 
	 * @param {String} platformName 
	 * @param {Object} adType 
	 * @param {Object} body 
	 */
	patchMarketplaceAdAdTypeTargeturl(platformName, adType, body) { 
		// verify the required parameter 'platformName' is set
		if (platformName === undefined || platformName === null) {
			throw 'Missing the required parameter "platformName" when calling patchMarketplaceAdAdTypeTargeturl';
		}
		// verify the required parameter 'adType' is set
		if (adType === undefined || adType === null) {
			throw 'Missing the required parameter "adType" when calling patchMarketplaceAdAdTypeTargeturl';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchMarketplaceAdAdTypeTargeturl';
		}

		return this.apiClient.callApi(
			'/api/v2/marketplace/ads/{platformName}/{adType}/targeturl', 
			'PATCH', 
			{ 'platformName': platformName,'adType': adType },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Update listing with specified ID
	 * 
	 * @param {String} listingId The unique identifier for a listing
	 * @param {Object} body 
	 */
	patchMarketplaceListing(listingId, body) { 
		// verify the required parameter 'listingId' is set
		if (listingId === undefined || listingId === null) {
			throw 'Missing the required parameter "listingId" when calling patchMarketplaceListing';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchMarketplaceListing';
		}

		return this.apiClient.callApi(
			'/api/v2/marketplace/listings/{listingId}', 
			'PATCH', 
			{ 'listingId': listingId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Create an ad
	 * 
	 * @param {String} platformName 
	 * @param {Object} adType 
	 * @param {Object} body 
	 */
	postMarketplaceAdAdType(platformName, adType, body) { 
		// verify the required parameter 'platformName' is set
		if (platformName === undefined || platformName === null) {
			throw 'Missing the required parameter "platformName" when calling postMarketplaceAdAdType';
		}
		// verify the required parameter 'adType' is set
		if (adType === undefined || adType === null) {
			throw 'Missing the required parameter "adType" when calling postMarketplaceAdAdType';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postMarketplaceAdAdType';
		}

		return this.apiClient.callApi(
			'/api/v2/marketplace/ads/{platformName}/{adType}', 
			'POST', 
			{ 'platformName': platformName,'adType': adType },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Create a document
	 * 
	 * @param {Object} body 
	 */
	postMarketplaceDocuments(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postMarketplaceDocuments';
		}

		return this.apiClient.callApi(
			'/api/v2/marketplace/documents', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Creates a presigned url for uploading images for documents
	 * 
	 * @param {String} documentId 
	 * @param {Object} body query
	 */
	postMarketplaceDocumentsImage(documentId, body) { 
		// verify the required parameter 'documentId' is set
		if (documentId === undefined || documentId === null) {
			throw 'Missing the required parameter "documentId" when calling postMarketplaceDocumentsImage';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postMarketplaceDocumentsImage';
		}

		return this.apiClient.callApi(
			'/api/v2/marketplace/documents/images/{documentId}', 
			'POST', 
			{ 'documentId': documentId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Create a documentation navigation
	 * 
	 * @param {Object} body 
	 */
	postMarketplaceDocumentsNavigations(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postMarketplaceDocumentsNavigations';
		}

		return this.apiClient.callApi(
			'/api/v2/marketplace/documents/navigations', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Retrieves document by a search term
	 * 
	 * @param {Object} body 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 20)
	 */
	postMarketplaceDocumentsSearch(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postMarketplaceDocumentsSearch';
		}

		return this.apiClient.callApi(
			'/api/v2/marketplace/documents/search', 
			'POST', 
			{  },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'] },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Create an enterprise agreement
	 * 
	 * @param {Object} body 
	 */
	postMarketplaceEnterpriseagreements(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postMarketplaceEnterpriseagreements';
		}

		return this.apiClient.callApi(
			'/api/v2/marketplace/enterpriseagreements', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Search for an enterprise agreement by a search term
	 * 
	 * @param {Array.<Object>} body 
	 */
	postMarketplaceEnterpriseagreementsSearch(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postMarketplaceEnterpriseagreementsSearch';
		}

		return this.apiClient.callApi(
			'/api/v2/marketplace/enterpriseagreements/search', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Create a listing
	 * 
	 * @param {Object} body 
	 */
	postMarketplaceListings(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postMarketplaceListings';
		}

		return this.apiClient.callApi(
			'/api/v2/marketplace/listings', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Search for listing matching specified filters and terms
	 * 
	 * @param {Object} body 
	 */
	postMarketplaceListingsSearch(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postMarketplaceListingsSearch';
		}

		return this.apiClient.callApi(
			'/api/v2/marketplace/listings/search', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Creates a partner
	 * 
	 * @param {Object} body 
	 */
	postMarketplacePartners(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postMarketplacePartners';
		}

		return this.apiClient.callApi(
			'/api/v2/marketplace/partners', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Returns the listing type for the specified partner and listing id.
	 * 
	 * @param {Object} body 
	 */
	postMarketplaceResellersListings(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postMarketplaceResellersListings';
		}

		return this.apiClient.callApi(
			'/api/v2/marketplace/resellers/listings', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Creates resellers for an organization
	 * 
	 * @param {String} organizationId 
	 * @param {Object} body 
	 */
	postMarketplaceResellersOrganization(organizationId, body) { 
		// verify the required parameter 'organizationId' is set
		if (organizationId === undefined || organizationId === null) {
			throw 'Missing the required parameter "organizationId" when calling postMarketplaceResellersOrganization';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postMarketplaceResellersOrganization';
		}

		return this.apiClient.callApi(
			'/api/v2/marketplace/resellers/organizations/{organizationId}', 
			'POST', 
			{ 'organizationId': organizationId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Update a document with specified ID
	 * 
	 * @param {String} documentId 
	 * @param {Object} body 
	 */
	putMarketplaceDocument(documentId, body) { 
		// verify the required parameter 'documentId' is set
		if (documentId === undefined || documentId === null) {
			throw 'Missing the required parameter "documentId" when calling putMarketplaceDocument';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putMarketplaceDocument';
		}

		return this.apiClient.callApi(
			'/api/v2/marketplace/documents/{documentId}', 
			'PUT', 
			{ 'documentId': documentId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Update document navigation with specified ID
	 * 
	 * @param {String} navigationId 
	 * @param {Object} body 
	 */
	putMarketplaceDocumentsNavigation(navigationId, body) { 
		// verify the required parameter 'navigationId' is set
		if (navigationId === undefined || navigationId === null) {
			throw 'Missing the required parameter "navigationId" when calling putMarketplaceDocumentsNavigation';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putMarketplaceDocumentsNavigation';
		}

		return this.apiClient.callApi(
			'/api/v2/marketplace/documents/navigations/{navigationId}', 
			'PUT', 
			{ 'navigationId': navigationId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Update an existing enterprise agreement
	 * 
	 * @param {String} enterpriseAgreementId The unique identifier for an enterprise agreement
	 * @param {Object} body 
	 */
	putMarketplaceEnterpriseagreement(enterpriseAgreementId, body) { 
		// verify the required parameter 'enterpriseAgreementId' is set
		if (enterpriseAgreementId === undefined || enterpriseAgreementId === null) {
			throw 'Missing the required parameter "enterpriseAgreementId" when calling putMarketplaceEnterpriseagreement';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putMarketplaceEnterpriseagreement';
		}

		return this.apiClient.callApi(
			'/api/v2/marketplace/enterpriseagreements/{enterpriseAgreementId}', 
			'PUT', 
			{ 'enterpriseAgreementId': enterpriseAgreementId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Set categories on listing
	 * 
	 * @param {String} listingId The unique identifier for a listing
	 * @param {Object} body 
	 */
	putMarketplaceListingCategories(listingId, body) { 
		// verify the required parameter 'listingId' is set
		if (listingId === undefined || listingId === null) {
			throw 'Missing the required parameter "listingId" when calling putMarketplaceListingCategories';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putMarketplaceListingCategories';
		}

		return this.apiClient.callApi(
			'/api/v2/marketplace/listings/{listingId}/categories', 
			'PUT', 
			{ 'listingId': listingId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Set the order of media on the listing
	 * 
	 * @param {String} listingId 
	 * @param {Object} body 
	 */
	putMarketplaceListingMediaOrder(listingId, body) { 
		// verify the required parameter 'listingId' is set
		if (listingId === undefined || listingId === null) {
			throw 'Missing the required parameter "listingId" when calling putMarketplaceListingMediaOrder';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putMarketplaceListingMediaOrder';
		}

		return this.apiClient.callApi(
			'/api/v2/marketplace/listings/{listingId}/media/order', 
			'PUT', 
			{ 'listingId': listingId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Set metadata on listing
	 * 
	 * @param {String} listingId The unique identifier for a listing
	 * @param {Object} body 
	 */
	putMarketplaceListingMetadata(listingId, body) { 
		// verify the required parameter 'listingId' is set
		if (listingId === undefined || listingId === null) {
			throw 'Missing the required parameter "listingId" when calling putMarketplaceListingMetadata';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putMarketplaceListingMetadata';
		}

		return this.apiClient.callApi(
			'/api/v2/marketplace/listings/{listingId}/metadata', 
			'PUT', 
			{ 'listingId': listingId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Update a partner
	 * 
	 * @param {String} partnerId 
	 * @param {Object} body 
	 */
	putMarketplacePartner(partnerId, body) { 
		// verify the required parameter 'partnerId' is set
		if (partnerId === undefined || partnerId === null) {
			throw 'Missing the required parameter "partnerId" when calling putMarketplacePartner';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putMarketplacePartner';
		}

		return this.apiClient.callApi(
			'/api/v2/marketplace/partners/{partnerId}', 
			'PUT', 
			{ 'partnerId': partnerId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Update all existing resellers for an organization
	 * 
	 * @param {String} organizationId 
	 * @param {Object} body 
	 */
	putMarketplaceResellersOrganization(organizationId, body) { 
		// verify the required parameter 'organizationId' is set
		if (organizationId === undefined || organizationId === null) {
			throw 'Missing the required parameter "organizationId" when calling putMarketplaceResellersOrganization';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putMarketplaceResellersOrganization';
		}

		return this.apiClient.callApi(
			'/api/v2/marketplace/resellers/organizations/{organizationId}', 
			'PUT', 
			{ 'organizationId': organizationId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

}


export default MarketplaceApi;
