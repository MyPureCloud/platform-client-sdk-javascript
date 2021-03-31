---
title: TextbotsApi
---
# platformClient.TextbotsApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**postTextbotsBotsExecute**](TextbotsApi.html#postTextbotsBotsExecute) | **POST** /api/v2/textbots/bots/execute | Send an intent to a bot to start a dialog/interact with it via text
{: class="table table-striped"}

<a name="postTextbotsBotsExecute"></a>

# PostTextResponse postTextbotsBotsExecute(postTextRequest)



POST /api/v2/textbots/bots/execute

Send an intent to a bot to start a dialog/interact with it via text

This will either start a bot with the given id or relay a communication to an existing bot session.

Requires ANY permissions: 

* textbots:session:execute


### Request Body Schema

<script type="text/javascript">
	function copyPostTextRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#PostTextRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

PostTextRequest <a href="#" onclick="return copyPostTextRequestExample()">Copy</a>

<div id="PostTextRequestExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "botId": String, 
  "botAlias": String, 
  "integrationId": String, 
  "botSessionId": String, 
  "postTextMessage": { 
    "type": String, 
    "text": String, 
    "content": { 
      "contentType": String, 
      "location": { 
        "url": String, 
        "address": String, 
        "text": String, 
        "latitude": Number, 
        "longitude": Number, 
      },  
      "attachment": { 
        "id": String, 
        "mediaType": String, 
        "url": String, 
        "mime": String, 
        "text": String, 
        "sha256": String, 
        "filename": String, 
      },  
      "quickReply": { 
        "id": String, 
        "text": String, 
        "payload": String, 
        "image": String, 
        "action": String, 
      },  
      "buttonResponse": { 
        "id": String, 
        "type": String, 
        "text": String, 
        "payload": String, 
      },  
      "generic": { 
        "id": String, 
        "title": String, 
        "description": String, 
        "image": String, 
        "video": String, 
        "actions": { 
          "url": String, 
          "urlTarget": String, 
          "textback": String, 
          "commandName": String, 
          "context": {String: Object}, 
        },  
        "components": { 
          "id": String, 
          "text": String, 
          "title": String, 
          "actions": { 
            "url": String, 
            "urlTarget": String, 
            "textback": String, 
            "commandName": String, 
            "context": {String: Object}, 
          },  
        },  
      },  
      "list": { 
        "id": String, 
        "listType": String, 
        "title": String, 
        "description": String, 
        "submitLabel": String, 
        "actions": { 
          "url": String, 
          "urlTarget": String, 
          "textback": String, 
          "commandName": String, 
          "context": {String: Object}, 
        },  
        "components": { 
          "id": String, 
          "rmid": String, 
          "type": String, 
          "image": String, 
          "title": String, 
          "description": String, 
          "actions": { 
            "url": String, 
            "urlTarget": String, 
            "textback": String, 
            "commandName": String, 
            "context": {String: Object}, 
          },  
        },  
      },  
      "template": { 
        "id": String, 
        "language": String, 
        "header": { 
          "type": String, 
          "text": String, 
          "media": { 
            "id": String, 
            "mediaType": String, 
            "url": String, 
            "mime": String, 
            "text": String, 
            "sha256": String, 
            "filename": String, 
          },  
          "parameters": { 
            "name": String, 
            "text": String, 
          },  
        },  
        "body": { 
          "text": String, 
          "parameters": { 
            "name": String, 
            "text": String, 
          },  
        },  
        "footer": { 
          "text": String, 
        },  
      },  
      "reactions": { 
        "reactionType": String, 
        "count": Number, 
      },  
      "mention": { 
        "nickname": String, 
        "id": String, 
        "idType": String, 
        "image": String, 
        "firstName": String, 
        "lastName": String, 
        "email": String, 
      },  
      "postback": { 
        "id": String, 
        "text": String, 
        "payload": String, 
      },  
    },  
  },  
  "languageCode": String, 
  "botSessionTimeoutMinutes": Number, 
  "botChannels": [String], 
  "botCorrelationId": String, 
  "messagingPlatformType": String, 
  "amazonLexRequest": { 
    "requestAttributes": {String: String}, 
    "sessionAttributes": {String: String}, 
  },  
  "googleDialogflow": { 
    "environment": String, 
    "eventName": String, 
    "webhookQueryParameters": {String: String}, 
    "eventInputParameters": {String: String}, 
  },  
  "genesysBotConnector": { 
    "queryParameters": {String: String}, 
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

let apiInstance = new platformClient.TextbotsApi();

let postTextRequest = {}; // Object | 

apiInstance.postTextbotsBotsExecute(postTextRequest)
  .then((data) => {
    console.log(`postTextbotsBotsExecute success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postTextbotsBotsExecute');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **postTextRequest** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**PostTextResponse**

