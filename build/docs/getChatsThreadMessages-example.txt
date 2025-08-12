const platformClient = require("purecloud-platform-client-v2");

const client = platformClient.ApiClient.instance;
client.setEnvironment(platformClient.PureCloudRegionHosts.us_east_1); // Genesys Cloud region

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
client.setAccessToken("your_access_token");

let apiInstance = new platformClient.ChatApi();

let threadId = "threadId_example"; // String | threadId
let opts = { 
  "limit": "limit_example", // String | The maximum number of messages to retrieve
  "before": "before_example", // String | The cutoff date for messages to retrieve
  "after": "after_example", // String | The beginning date for messages to retrieve
  "excludeMetadata": true // Boolean | Whether to exclude metadata for messages
};

// Get history by thread
apiInstance.getChatsThreadMessages(threadId, opts)
  .then((data) => {
    console.log(`getChatsThreadMessages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log("There was a failure calling getChatsThreadMessages");
    console.error(err);
  });