const platformClient = require("purecloud-platform-client-v2");

const client = platformClient.ApiClient.instance;
client.setEnvironment(platformClient.PureCloudRegionHosts.us_east_1); // Genesys Cloud region

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
client.setAccessToken("your_access_token");

let apiInstance = new platformClient.ChatApi();

let threadId = "threadId_example"; // String | threadId
let opts = { 
  "pageSize": 25, // Number | The total page size requested
  "pageNumber": 1, // Number | The page number requested
  "sortBy": "sortBy_example", // String | variable name requested to sort by
  "expand": ["expand_example"], // [String] | variable name requested by expand list
  "nextPage": "nextPage_example", // String | next page token
  "previousPage": "previousPage_example", // String | Previous page token
  "limit": "limit_example", // String | The maximum number of messages to retrieve
  "before": "before_example", // String | The cutoff date for messages to retrieve
  "after": "after_example" // String | The beginning date for messages to retrieve
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