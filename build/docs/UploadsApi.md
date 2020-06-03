---
title: UploadsApi
---
# platformClient.UploadsApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**postUploadsPublicassetsImages**](UploadsApi.html#postUploadsPublicassetsImages) | **POST** /api/v2/uploads/publicassets/images | Creates presigned url for uploading a public asset image
{: class="table table-striped"}

<a name="postUploadsPublicassetsImages"></a>

# UploadUrlResponse postUploadsPublicassetsImages(body)



POST /api/v2/uploads/publicassets/images

Creates presigned url for uploading a public asset image



Requires ALL permissions: 

* uploads:publicasset:upload


### Request Body Schema

<script type="text/javascript">
	function copyUploadUrlRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#UploadUrlRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

UploadUrlRequest <a href="#" onclick="return copyUploadUrlRequestExample()">Copy</a>

<div id="UploadUrlRequestExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "fileName": String, 
  "contentMd5": String, 
  "signedUrlTimeoutSeconds": Number, 
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

let apiInstance = new platformClient.UploadsApi();

let body = {}; // Object | query

apiInstance.postUploadsPublicassetsImages(body)
  .then((data) => {
    console.log(`postUploadsPublicassetsImages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postUploadsPublicassetsImages');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |
{: class="table table-striped"}

### Return type

**UploadUrlResponse**

