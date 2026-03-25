# GreetingsApi

# platformClient.GreetingsApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteGreeting**](GreetingsApi#deleteGreeting) | **DELETE** /api/v2/greetings/{greetingId} | Deletes a Greeting with the given GreetingId
[**getGreeting**](GreetingsApi#getGreeting) | **GET** /api/v2/greetings/{greetingId} | Get a Greeting with the given GreetingId
[**getGreetingDownloads**](GreetingsApi#getGreetingDownloads) | **GET** /api/v2/greetings/{greetingId}/downloads | Download a organization greeting recording
[**getGreetingGroupsDownloads**](GreetingsApi#getGreetingGroupsDownloads) | **GET** /api/v2/greetings/{greetingId}/groups/downloads | Download a group greeting recording
[**getGreetingMedia**](GreetingsApi#getGreetingMedia) | **GET** /api/v2/greetings/{greetingId}/media | Get media playback URI for this greeting
[**getGreetingUsersDownloads**](GreetingsApi#getGreetingUsersDownloads) | **GET** /api/v2/greetings/{greetingId}/users/downloads | Download a user greeting recording
[**getGreetings**](GreetingsApi#getGreetings) | **GET** /api/v2/greetings | Gets an Organization's Greetings
[**getGreetingsDefaults**](GreetingsApi#getGreetingsDefaults) | **GET** /api/v2/greetings/defaults | Get an Organization's DefaultGreetingList
[**getGroupGreetings**](GreetingsApi#getGroupGreetings) | **GET** /api/v2/groups/{groupId}/greetings | Get a list of the Group's Greetings
[**getGroupGreetingsDefaults**](GreetingsApi#getGroupGreetingsDefaults) | **GET** /api/v2/groups/{groupId}/greetings/defaults | Grabs the list of Default Greetings given a Group's ID
[**getUserGreetings**](GreetingsApi#getUserGreetings) | **GET** /api/v2/users/{userId}/greetings | Get a list of the User's Greetings
[**getUserGreetingsDefaults**](GreetingsApi#getUserGreetingsDefaults) | **GET** /api/v2/users/{userId}/greetings/defaults | Grabs the list of Default Greetings given a User's ID
[**postGreetings**](GreetingsApi#postGreetings) | **POST** /api/v2/greetings | Create a Greeting for an Organization
[**postGroupGreetings**](GreetingsApi#postGroupGreetings) | **POST** /api/v2/groups/{groupId}/greetings | Creates a Greeting for a Group
[**postUserGreetings**](GreetingsApi#postUserGreetings) | **POST** /api/v2/users/{userId}/greetings | Creates a Greeting for a User
[**putGreeting**](GreetingsApi#putGreeting) | **PUT** /api/v2/greetings/{greetingId} | Updates the Greeting with the given GreetingId
[**putGreetingsDefaults**](GreetingsApi#putGreetingsDefaults) | **PUT** /api/v2/greetings/defaults | Update an Organization's DefaultGreetingList
[**putGroupGreetingsDefaults**](GreetingsApi#putGroupGreetingsDefaults) | **PUT** /api/v2/groups/{groupId}/greetings/defaults | Updates the DefaultGreetingList of the specified Group
[**putUserGreetingsDefaults**](GreetingsApi#putUserGreetingsDefaults) | **PUT** /api/v2/users/{userId}/greetings/defaults | Updates the DefaultGreetingList of the specified User



## deleteGreeting

> void deleteGreeting(greetingId, opts)


DELETE /api/v2/greetings/{greetingId}

Deletes a Greeting with the given GreetingId

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GreetingsApi();

let greetingId = "greetingId_example"; // String | Greeting ID
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteGreeting(greetingId, opts)
  .then(() => {
    console.log('deleteGreeting returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteGreeting');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **greetingId** | **String** | Greeting ID |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## getGreeting

> Greeting getGreeting(greetingId, opts)


GET /api/v2/greetings/{greetingId}

Get a Greeting with the given GreetingId

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GreetingsApi();

let greetingId = "greetingId_example"; // String | Greeting ID
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getGreeting(greetingId, opts)
  .then((data) => {
    console.log(`getGreeting success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGreeting');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **greetingId** | **String** | Greeting ID |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Greeting**


## getGreetingDownloads

> GreetingMediaInfo getGreetingDownloads(greetingId, opts)


GET /api/v2/greetings/{greetingId}/downloads

Download a organization greeting recording

Requires ANY permissions:

* greetings:greeting:download

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GreetingsApi();

let greetingId = "greetingId_example"; // String | Greeting ID
let opts = { 
  'formatId': "WAV", // String | The desired media format.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getGreetingDownloads(greetingId, opts)
  .then((data) => {
    console.log(`getGreetingDownloads success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGreetingDownloads');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **greetingId** | **String** | Greeting ID |  |
 **formatId** | **String** | The desired media format. | [optional] [default to WAV]<br />**Values**: WAV, WEBM, WAV_ULAW, OGG_VORBIS, OGG_OPUS, MP3, NONE |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**GreetingMediaInfo**


## getGreetingGroupsDownloads

> GreetingMediaInfo getGreetingGroupsDownloads(greetingId, opts)


GET /api/v2/greetings/{greetingId}/groups/downloads

Download a group greeting recording

Requires ANY permissions:

* greetings:groupGreeting:download

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GreetingsApi();

let greetingId = "greetingId_example"; // String | Greeting ID
let opts = { 
  'formatId': "WAV", // String | The desired media format.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getGreetingGroupsDownloads(greetingId, opts)
  .then((data) => {
    console.log(`getGreetingGroupsDownloads success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGreetingGroupsDownloads');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **greetingId** | **String** | Greeting ID |  |
 **formatId** | **String** | The desired media format. | [optional] [default to WAV]<br />**Values**: WAV, WEBM, WAV_ULAW, OGG_VORBIS, OGG_OPUS, MP3, NONE |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**GreetingMediaInfo**


## getGreetingMedia

> GreetingMediaInfo getGreetingMedia(greetingId, opts)


GET /api/v2/greetings/{greetingId}/media

Get media playback URI for this greeting

API should migrate to use GET api/v2/greetings/{greetingId}/downloads

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GreetingsApi();

let greetingId = "greetingId_example"; // String | Greeting ID
let opts = { 
  'formatId': "WAV", // String | The desired media format.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getGreetingMedia(greetingId, opts)
  .then((data) => {
    console.log(`getGreetingMedia success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGreetingMedia');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **greetingId** | **String** | Greeting ID |  |
 **formatId** | **String** | The desired media format. | [optional] [default to WAV]<br />**Values**: WAV, WEBM, WAV_ULAW, OGG_VORBIS, OGG_OPUS, MP3, NONE |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**GreetingMediaInfo**


## getGreetingUsersDownloads

> GreetingMediaInfo getGreetingUsersDownloads(greetingId, opts)


GET /api/v2/greetings/{greetingId}/users/downloads

Download a user greeting recording

Requires ANY permissions:

* greetings:greeting:download

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GreetingsApi();

let greetingId = "greetingId_example"; // String | Greeting ID
let opts = { 
  'formatId': "WAV", // String | The desired media format.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getGreetingUsersDownloads(greetingId, opts)
  .then((data) => {
    console.log(`getGreetingUsersDownloads success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGreetingUsersDownloads');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **greetingId** | **String** | Greeting ID |  |
 **formatId** | **String** | The desired media format. | [optional] [default to WAV]<br />**Values**: WAV, WEBM, WAV_ULAW, OGG_VORBIS, OGG_OPUS, MP3, NONE |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**GreetingMediaInfo**


## getGreetings

> DomainEntityListing getGreetings(opts)


GET /api/v2/greetings

Gets an Organization's Greetings

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GreetingsApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getGreetings(opts)
  .then((data) => {
    console.log(`getGreetings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGreetings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**DomainEntityListing**


## getGreetingsDefaults

> DefaultGreetingList getGreetingsDefaults(opts)


GET /api/v2/greetings/defaults

Get an Organization's DefaultGreetingList

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GreetingsApi();
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getGreetingsDefaults(opts)
  .then((data) => {
    console.log(`getGreetingsDefaults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGreetingsDefaults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**DefaultGreetingList**


## getGroupGreetings

> GreetingListing getGroupGreetings(groupId, opts)


GET /api/v2/groups/{groupId}/greetings

Get a list of the Group's Greetings

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GreetingsApi();

let groupId = "groupId_example"; // String | Group ID
let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getGroupGreetings(groupId, opts)
  .then((data) => {
    console.log(`getGroupGreetings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGroupGreetings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **groupId** | **String** | Group ID |  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**GreetingListing**


## getGroupGreetingsDefaults

> DefaultGreetingList getGroupGreetingsDefaults(groupId, opts)


GET /api/v2/groups/{groupId}/greetings/defaults

Grabs the list of Default Greetings given a Group's ID

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GreetingsApi();

let groupId = "groupId_example"; // String | Group ID
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getGroupGreetingsDefaults(groupId, opts)
  .then((data) => {
    console.log(`getGroupGreetingsDefaults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGroupGreetingsDefaults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **groupId** | **String** | Group ID |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**DefaultGreetingList**


## getUserGreetings

> DomainEntityListing getUserGreetings(userId, opts)


GET /api/v2/users/{userId}/greetings

Get a list of the User's Greetings

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GreetingsApi();

let userId = "userId_example"; // String | User ID
let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getUserGreetings(userId, opts)
  .then((data) => {
    console.log(`getUserGreetings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getUserGreetings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**DomainEntityListing**


## getUserGreetingsDefaults

> DefaultGreetingList getUserGreetingsDefaults(userId, opts)


GET /api/v2/users/{userId}/greetings/defaults

Grabs the list of Default Greetings given a User's ID

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GreetingsApi();

let userId = "userId_example"; // String | User ID
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getUserGreetingsDefaults(userId, opts)
  .then((data) => {
    console.log(`getUserGreetingsDefaults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getUserGreetingsDefaults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**DefaultGreetingList**


## postGreetings

> Greeting postGreetings(body, opts)


POST /api/v2/greetings

Create a Greeting for an Organization

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GreetingsApi();

let body = {}; // Object | The Greeting to create
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postGreetings(body, opts)
  .then((data) => {
    console.log(`postGreetings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postGreetings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | The Greeting to create |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Greeting**


## postGroupGreetings

> Greeting postGroupGreetings(groupId, body, opts)


POST /api/v2/groups/{groupId}/greetings

Creates a Greeting for a Group

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GreetingsApi();

let groupId = "groupId_example"; // String | Group ID
let body = {}; // Object | The Greeting to create
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postGroupGreetings(groupId, body, opts)
  .then((data) => {
    console.log(`postGroupGreetings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postGroupGreetings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **groupId** | **String** | Group ID |  |
 **body** | **Object** | The Greeting to create |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Greeting**


## postUserGreetings

> Greeting postUserGreetings(userId, body, opts)


POST /api/v2/users/{userId}/greetings

Creates a Greeting for a User

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GreetingsApi();

let userId = "userId_example"; // String | User ID
let body = {}; // Object | The Greeting to create
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postUserGreetings(userId, body, opts)
  .then((data) => {
    console.log(`postUserGreetings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postUserGreetings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **body** | **Object** | The Greeting to create |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Greeting**


## putGreeting

> Greeting putGreeting(greetingId, body, opts)


PUT /api/v2/greetings/{greetingId}

Updates the Greeting with the given GreetingId

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GreetingsApi();

let greetingId = "greetingId_example"; // String | Greeting ID
let body = {}; // Object | The updated Greeting
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.putGreeting(greetingId, body, opts)
  .then((data) => {
    console.log(`putGreeting success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putGreeting');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **greetingId** | **String** | Greeting ID |  |
 **body** | **Object** | The updated Greeting |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Greeting**


## putGreetingsDefaults

> DefaultGreetingList putGreetingsDefaults(body, opts)


PUT /api/v2/greetings/defaults

Update an Organization's DefaultGreetingList

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GreetingsApi();

let body = {}; // Object | The updated defaultGreetingList
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.putGreetingsDefaults(body, opts)
  .then((data) => {
    console.log(`putGreetingsDefaults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putGreetingsDefaults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | The updated defaultGreetingList |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**DefaultGreetingList**


## putGroupGreetingsDefaults

> DefaultGreetingList putGroupGreetingsDefaults(groupId, body, opts)


PUT /api/v2/groups/{groupId}/greetings/defaults

Updates the DefaultGreetingList of the specified Group

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GreetingsApi();

let groupId = "groupId_example"; // String | Group ID
let body = {}; // Object | The updated defaultGreetingList
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.putGroupGreetingsDefaults(groupId, body, opts)
  .then((data) => {
    console.log(`putGroupGreetingsDefaults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putGroupGreetingsDefaults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **groupId** | **String** | Group ID |  |
 **body** | **Object** | The updated defaultGreetingList |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**DefaultGreetingList**


## putUserGreetingsDefaults

> DefaultGreetingList putUserGreetingsDefaults(userId, body, opts)


PUT /api/v2/users/{userId}/greetings/defaults

Updates the DefaultGreetingList of the specified User

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GreetingsApi();

let userId = "userId_example"; // String | User ID
let body = {}; // Object | The updated defaultGreetingList
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.putUserGreetingsDefaults(userId, body, opts)
  .then((data) => {
    console.log(`putUserGreetingsDefaults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putUserGreetingsDefaults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **body** | **Object** | The updated defaultGreetingList |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**DefaultGreetingList**


_purecloud-platform-client-v2@249.1.0_
