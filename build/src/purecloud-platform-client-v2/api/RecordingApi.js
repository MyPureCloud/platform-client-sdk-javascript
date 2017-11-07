(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['purecloud-platform-client-v2/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.platformClient) {
      root.platformClient = {};
    }
    root.platformClient.RecordingApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Recording service.
   * @module purecloud-platform-client-v2/api/RecordingApi
   * @version 12.0.0
   */

  /**
   * Constructs a new RecordingApi. 
   * @alias module:purecloud-platform-client-v2/api/RecordingApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Delete annotation
     * 
     * @param {String} conversationId Conversation ID
     * @param {String} recordingId Recording ID
     * @param {String} annotationId Annotation ID
     */
    this.deleteConversationRecordingAnnotation = function(conversationId, recordingId, annotationId) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling deleteConversationRecordingAnnotation";
      }

      // verify the required parameter 'recordingId' is set
      if (recordingId === undefined || recordingId === null) {
        throw "Missing the required parameter 'recordingId' when calling deleteConversationRecordingAnnotation";
      }

      // verify the required parameter 'annotationId' is set
      if (annotationId === undefined || annotationId === null) {
        throw "Missing the required parameter 'annotationId' when calling deleteConversationRecordingAnnotation";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations/{annotationId}', 
        'DELETE', 
        { 'conversationId': conversationId,'recordingId': recordingId,'annotationId': annotationId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Deletes a single orphan recording
     * 
     * @param {String} orphanId Orphan ID
     */
    this.deleteOrphanrecording = function(orphanId) { 

      // verify the required parameter 'orphanId' is set
      if (orphanId === undefined || orphanId === null) {
        throw "Missing the required parameter 'orphanId' when calling deleteOrphanrecording";
      }


      return this.apiClient.callApi(
        '/api/v2/orphanrecordings/{orphanId}', 
        'DELETE', 
        { 'orphanId': orphanId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete media retention policies
     * Bulk delete of media retention policies, this will only delete the polices that match the ids specified in the query param.
     * @param {String} ids 
     */
    this.deleteRecordingMediaretentionpolicies = function(ids) { 

      // verify the required parameter 'ids' is set
      if (ids === undefined || ids === null) {
        throw "Missing the required parameter 'ids' when calling deleteRecordingMediaretentionpolicies";
      }


      return this.apiClient.callApi(
        '/api/v2/recording/mediaretentionpolicies', 
        'DELETE', 
        {  }, 
        { 'ids': ids }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete a media retention policy
     * 
     * @param {String} policyId Policy ID
     */
    this.deleteRecordingMediaretentionpolicy = function(policyId) { 

      // verify the required parameter 'policyId' is set
      if (policyId === undefined || policyId === null) {
        throw "Missing the required parameter 'policyId' when calling deleteRecordingMediaretentionpolicy";
      }


      return this.apiClient.callApi(
        '/api/v2/recording/mediaretentionpolicies/{policyId}', 
        'DELETE', 
        { 'policyId': policyId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Gets a specific recording.
     * 
     * @param {String} conversationId Conversation ID
     * @param {String} recordingId Recording ID
     * @param {Object} opts Optional parameters
     * @param {Object} opts.formatId The desired media format. (default to WEBM)
     * @param {Boolean} opts.download requesting a download format of the recording (default to false)
     * @param {String} opts.fileName the name of the downloaded fileName
     */
    this.getConversationRecording = function(conversationId, recordingId, opts) { 
      opts = opts || {};

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling getConversationRecording";
      }

      // verify the required parameter 'recordingId' is set
      if (recordingId === undefined || recordingId === null) {
        throw "Missing the required parameter 'recordingId' when calling getConversationRecording";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/{conversationId}/recordings/{recordingId}', 
        'GET', 
        { 'conversationId': conversationId,'recordingId': recordingId }, 
        { 'formatId': opts['formatId'],'download': opts['download'],'fileName': opts['fileName'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get annotation
     * 
     * @param {String} conversationId Conversation ID
     * @param {String} recordingId Recording ID
     * @param {String} annotationId Annotation ID
     */
    this.getConversationRecordingAnnotation = function(conversationId, recordingId, annotationId) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling getConversationRecordingAnnotation";
      }

      // verify the required parameter 'recordingId' is set
      if (recordingId === undefined || recordingId === null) {
        throw "Missing the required parameter 'recordingId' when calling getConversationRecordingAnnotation";
      }

      // verify the required parameter 'annotationId' is set
      if (annotationId === undefined || annotationId === null) {
        throw "Missing the required parameter 'annotationId' when calling getConversationRecordingAnnotation";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations/{annotationId}', 
        'GET', 
        { 'conversationId': conversationId,'recordingId': recordingId,'annotationId': annotationId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get annotations for recording
     * 
     * @param {String} conversationId Conversation ID
     * @param {String} recordingId Recording ID
     */
    this.getConversationRecordingAnnotations = function(conversationId, recordingId) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling getConversationRecordingAnnotations";
      }

      // verify the required parameter 'recordingId' is set
      if (recordingId === undefined || recordingId === null) {
        throw "Missing the required parameter 'recordingId' when calling getConversationRecordingAnnotations";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations', 
        'GET', 
        { 'conversationId': conversationId,'recordingId': recordingId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get recording metadata for a conversation. Does not return playable media.
     * 
     * @param {String} conversationId Conversation ID
     */
    this.getConversationRecordingmetadata = function(conversationId) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling getConversationRecordingmetadata";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/{conversationId}/recordingmetadata', 
        'GET', 
        { 'conversationId': conversationId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get metadata for a specific recording. Does not return playable media.
     * 
     * @param {String} conversationId Conversation ID
     * @param {String} recordingId Recording ID
     */
    this.getConversationRecordingmetadataRecordingId = function(conversationId, recordingId) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling getConversationRecordingmetadataRecordingId";
      }

      // verify the required parameter 'recordingId' is set
      if (recordingId === undefined || recordingId === null) {
        throw "Missing the required parameter 'recordingId' when calling getConversationRecordingmetadataRecordingId";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/{conversationId}/recordingmetadata/{recordingId}', 
        'GET', 
        { 'conversationId': conversationId,'recordingId': recordingId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get all of a Conversation&#39;s Recordings.
     * 
     * @param {String} conversationId Conversation ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.maxWaitMs The maximum number of milliseconds to wait for the recording to be ready. Must be a positive value. (default to 5000)
     * @param {Object} opts.formatId The desired media format (default to WEBM)
     */
    this.getConversationRecordings = function(conversationId, opts) { 
      opts = opts || {};

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling getConversationRecordings";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/{conversationId}/recordings', 
        'GET', 
        { 'conversationId': conversationId }, 
        { 'maxWaitMs': opts['maxWaitMs'],'formatId': opts['formatId'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Gets a single orphan recording
     * 
     * @param {String} orphanId Orphan ID
     */
    this.getOrphanrecording = function(orphanId) { 

      // verify the required parameter 'orphanId' is set
      if (orphanId === undefined || orphanId === null) {
        throw "Missing the required parameter 'orphanId' when calling getOrphanrecording";
      }


      return this.apiClient.callApi(
        '/api/v2/orphanrecordings/{orphanId}', 
        'GET', 
        { 'orphanId': orphanId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Gets the media of a single orphan recording
     * A 202 response means the orphaned media is currently transcoding and will be available shortly.A 200 response denotes the transcoded orphan media is available now and is contained in the response body.
     * @param {String} orphanId Orphan ID
     * @param {Object} opts Optional parameters
     * @param {Object} opts.formatId The desired media format. (default to WEBM)
     * @param {Boolean} opts.download requesting a download format of the recording (default to false)
     * @param {String} opts.fileName the name of the downloaded fileName
     */
    this.getOrphanrecordingMedia = function(orphanId, opts) { 
      opts = opts || {};

      // verify the required parameter 'orphanId' is set
      if (orphanId === undefined || orphanId === null) {
        throw "Missing the required parameter 'orphanId' when calling getOrphanrecordingMedia";
      }


      return this.apiClient.callApi(
        '/api/v2/orphanrecordings/{orphanId}/media', 
        'GET', 
        { 'orphanId': orphanId }, 
        { 'formatId': opts['formatId'],'download': opts['download'],'fileName': opts['fileName'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Gets all orphan recordings
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The total page size requested (default to 25)
     * @param {Number} opts.pageNumber The page number requested (default to 1)
     * @param {String} opts.sortBy variable name requested to sort by
     * @param {Array.<Object>} opts.expand variable name requested by expand list
     * @param {String} opts.nextPage next page token
     * @param {String} opts.previousPage Previous page token
     * @param {Boolean} opts.hasConversation Filter resulting orphans by whether the conversation is known. False returns all orphans for the organization. (default to false)
     * @param {Object} opts.media Filter resulting orphans based on their media type
     */
    this.getOrphanrecordings = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/orphanrecordings', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'nextPage': opts['nextPage'],'previousPage': opts['previousPage'],'hasConversation': opts['hasConversation'],'media': opts['media'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the local encryption settings
     * 
     * @param {String} settingsId Settings Id
     */
    this.getRecordingLocalkeysSetting = function(settingsId) { 

      // verify the required parameter 'settingsId' is set
      if (settingsId === undefined || settingsId === null) {
        throw "Missing the required parameter 'settingsId' when calling getRecordingLocalkeysSetting";
      }


      return this.apiClient.callApi(
        '/api/v2/recording/localkeys/settings/{settingsId}', 
        'GET', 
        { 'settingsId': settingsId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * gets a list local key settings data
     * 
     */
    this.getRecordingLocalkeysSettings = function() { 


      return this.apiClient.callApi(
        '/api/v2/recording/localkeys/settings', 
        'GET', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Gets media retention policy list with query options to filter on name and enabled.
     * for a less verbose response, add summary=true to this endpoint
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The total page size requested (default to 25)
     * @param {Number} opts.pageNumber The page number requested (default to 1)
     * @param {String} opts.sortBy variable name requested to sort by
     * @param {Array.<Object>} opts.expand variable name requested by expand list
     * @param {String} opts.nextPage next page token
     * @param {String} opts.previousPage Previous page token
     * @param {String} opts.name the policy name - used for filtering results in searches.
     * @param {Boolean} opts.enabled checks to see if policy is enabled - use enabled = true or enabled = false
     * @param {Boolean} opts.summary provides a less verbose response of policy lists. (default to false)
     * @param {Boolean} opts.hasErrors provides a way to fetch all policies with errors or policies that do not have errors
     */
    this.getRecordingMediaretentionpolicies = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/recording/mediaretentionpolicies', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'nextPage': opts['nextPage'],'previousPage': opts['previousPage'],'name': opts['name'],'enabled': opts['enabled'],'summary': opts['summary'],'hasErrors': opts['hasErrors'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a media retention policy
     * 
     * @param {String} policyId Policy ID
     */
    this.getRecordingMediaretentionpolicy = function(policyId) { 

      // verify the required parameter 'policyId' is set
      if (policyId === undefined || policyId === null) {
        throw "Missing the required parameter 'policyId' when calling getRecordingMediaretentionpolicy";
      }


      return this.apiClient.callApi(
        '/api/v2/recording/mediaretentionpolicies/{policyId}', 
        'GET', 
        { 'policyId': policyId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get encryption key list
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     */
    this.getRecordingRecordingkeys = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/recording/recordingkeys', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get key rotation schedule
     * 
     */
    this.getRecordingRecordingkeysRotationschedule = function() { 


      return this.apiClient.callApi(
        '/api/v2/recording/recordingkeys/rotationschedule', 
        'GET', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the Recording Settings for the Organization
     * 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.createDefault If no settings are found, a new one is created with default values (default to false)
     */
    this.getRecordingSettings = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/recording/settings', 
        'GET', 
        {  }, 
        { 'createDefault': opts['createDefault'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Retrieves a paged listing of screen recording sessions
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     */
    this.getRecordingsScreensessions = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/recordings/screensessions', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Patch a media retention policy
     * 
     * @param {String} policyId Policy ID
     * @param {Object} body Policy
     */
    this.patchRecordingMediaretentionpolicy = function(policyId, body) { 

      // verify the required parameter 'policyId' is set
      if (policyId === undefined || policyId === null) {
        throw "Missing the required parameter 'policyId' when calling patchRecordingMediaretentionpolicy";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchRecordingMediaretentionpolicy";
      }


      return this.apiClient.callApi(
        '/api/v2/recording/mediaretentionpolicies/{policyId}', 
        'PATCH', 
        { 'policyId': policyId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update a screen recording session
     * 
     * @param {String} recordingSessionId Screen recording session ID
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body 
     */
    this.patchRecordingsScreensession = function(recordingSessionId, opts) { 
      opts = opts || {};

      // verify the required parameter 'recordingSessionId' is set
      if (recordingSessionId === undefined || recordingSessionId === null) {
        throw "Missing the required parameter 'recordingSessionId' when calling patchRecordingsScreensession";
      }


      return this.apiClient.callApi(
        '/api/v2/recordings/screensessions/{recordingSessionId}', 
        'PATCH', 
        { 'recordingSessionId': recordingSessionId }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create annotation
     * 
     * @param {String} conversationId Conversation ID
     * @param {String} recordingId Recording ID
     * @param {Object} body annotation
     */
    this.postConversationRecordingAnnotations = function(conversationId, recordingId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling postConversationRecordingAnnotations";
      }

      // verify the required parameter 'recordingId' is set
      if (recordingId === undefined || recordingId === null) {
        throw "Missing the required parameter 'recordingId' when calling postConversationRecordingAnnotations";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postConversationRecordingAnnotations";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations', 
        'POST', 
        { 'conversationId': conversationId,'recordingId': recordingId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * create a local recording key
     * 
     * @param {Object} body Local Encryption body
     */
    this.postRecordingLocalkeys = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postRecordingLocalkeys";
      }


      return this.apiClient.callApi(
        '/api/v2/recording/localkeys', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * create settings for local key creation
     * 
     * @param {Object} body Local Encryption Configuration
     */
    this.postRecordingLocalkeysSettings = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postRecordingLocalkeysSettings";
      }


      return this.apiClient.callApi(
        '/api/v2/recording/localkeys/settings', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create media retention policy
     * 
     * @param {Object} body Policy
     */
    this.postRecordingMediaretentionpolicies = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postRecordingMediaretentionpolicies";
      }


      return this.apiClient.callApi(
        '/api/v2/recording/mediaretentionpolicies', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create encryption key
     * 
     */
    this.postRecordingRecordingkeys = function() { 


      return this.apiClient.callApi(
        '/api/v2/recording/recordingkeys', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Updates the retention records on a recording.
     * Currently supports updating and removing both archive and delete dates for eligible recordings. A request to change the archival date of an archived recording will result in a restoration of the recording until the new date set. 
     * @param {String} conversationId Conversation ID
     * @param {String} recordingId Recording ID
     * @param {Object} body recording
     */
    this.putConversationRecording = function(conversationId, recordingId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling putConversationRecording";
      }

      // verify the required parameter 'recordingId' is set
      if (recordingId === undefined || recordingId === null) {
        throw "Missing the required parameter 'recordingId' when calling putConversationRecording";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putConversationRecording";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/{conversationId}/recordings/{recordingId}', 
        'PUT', 
        { 'conversationId': conversationId,'recordingId': recordingId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update annotation
     * 
     * @param {String} conversationId Conversation ID
     * @param {String} recordingId Recording ID
     * @param {String} annotationId Annotation ID
     * @param {Object} body annotation
     */
    this.putConversationRecordingAnnotation = function(conversationId, recordingId, annotationId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling putConversationRecordingAnnotation";
      }

      // verify the required parameter 'recordingId' is set
      if (recordingId === undefined || recordingId === null) {
        throw "Missing the required parameter 'recordingId' when calling putConversationRecordingAnnotation";
      }

      // verify the required parameter 'annotationId' is set
      if (annotationId === undefined || annotationId === null) {
        throw "Missing the required parameter 'annotationId' when calling putConversationRecordingAnnotation";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putConversationRecordingAnnotation";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations/{annotationId}', 
        'PUT', 
        { 'conversationId': conversationId,'recordingId': recordingId,'annotationId': annotationId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Updates an orphan recording to a regular recording with retention values
     * If this operation is successful the orphan will no longer exist. It will be replaced by the resulting recording in the response. This replacement recording is accessible by the normal Recording api.
     * @param {String} orphanId Orphan ID
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body 
     */
    this.putOrphanrecording = function(orphanId, opts) { 
      opts = opts || {};

      // verify the required parameter 'orphanId' is set
      if (orphanId === undefined || orphanId === null) {
        throw "Missing the required parameter 'orphanId' when calling putOrphanrecording";
      }


      return this.apiClient.callApi(
        '/api/v2/orphanrecordings/{orphanId}', 
        'PUT', 
        { 'orphanId': orphanId }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update the local encryption settings
     * 
     * @param {String} settingsId Settings Id
     * @param {Object} body Local Encryption metadata
     */
    this.putRecordingLocalkeysSetting = function(settingsId, body) { 

      // verify the required parameter 'settingsId' is set
      if (settingsId === undefined || settingsId === null) {
        throw "Missing the required parameter 'settingsId' when calling putRecordingLocalkeysSetting";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putRecordingLocalkeysSetting";
      }


      return this.apiClient.callApi(
        '/api/v2/recording/localkeys/settings/{settingsId}', 
        'PUT', 
        { 'settingsId': settingsId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update a media retention policy
     * 
     * @param {String} policyId Policy ID
     * @param {Object} body Policy
     */
    this.putRecordingMediaretentionpolicy = function(policyId, body) { 

      // verify the required parameter 'policyId' is set
      if (policyId === undefined || policyId === null) {
        throw "Missing the required parameter 'policyId' when calling putRecordingMediaretentionpolicy";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putRecordingMediaretentionpolicy";
      }


      return this.apiClient.callApi(
        '/api/v2/recording/mediaretentionpolicies/{policyId}', 
        'PUT', 
        { 'policyId': policyId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update key rotation schedule
     * 
     * @param {Object} body KeyRotationSchedule
     */
    this.putRecordingRecordingkeysRotationschedule = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putRecordingRecordingkeysRotationschedule";
      }


      return this.apiClient.callApi(
        '/api/v2/recording/recordingkeys/rotationschedule', 
        'PUT', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update the Recording Settings for the Organization
     * 
     * @param {Object} body Recording settings
     */
    this.putRecordingSettings = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putRecordingSettings";
      }


      return this.apiClient.callApi(
        '/api/v2/recording/settings', 
        'PUT', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };
  };

  return exports;
}));
