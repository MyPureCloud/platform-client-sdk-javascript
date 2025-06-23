Platform API version: 9347


* Fix - API endpoint (SDK API method) with a required string parameter: The SDK was only checking that the parameter was not null or was not undefined. The SDK now also checks that the parameter is not an empty string. E.g. getRoutingQueue(queueId) will throw an error if queueId is null, undefined or an empty string.

* Fix - Configuration file Auto/Live Reload: The SDK was not closing the config file listener properly when live_reload_config was set to false. This has been corrected. The SDK has been corrected.

# Major Changes (0 changes)


# Minor Changes (0 changes)


# Point Changes (0 changes)
