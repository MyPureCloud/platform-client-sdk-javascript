const platformClient = require("purecloud-platform-client-v2");

const client = platformClient.ApiClient.instance;
client.setEnvironment(platformClient.PureCloudRegionHosts.us_east_1); // Genesys Cloud region

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
client.setAccessToken("your_access_token");

let apiInstance = new platformClient.UsersApi();

let opts = { 
  "expand": ["expand_example"], // [String] | Which fields, if any, to expand.
  "integrationPresenceSource": "integrationPresenceSource_example" // String | Get your presence for a given integration. This parameter will only be used when presence is provided as an expand.
};

// Get current user details.
apiInstance.getUsersMe(opts)
  .then((data) => {
    console.log(`getUsersMe success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log("There was a failure calling getUsersMe");
    console.error(err);
  });