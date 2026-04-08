Platform API version: 10196


## Release Notes

Bug Fix: Fixed incorrect processing of parameters in Platform API Endpoints' SDK method ([Move ApiClient UseLegacyParameterFilter default value to false, for correct API Query Parameter Processing](https://community.genesys.com/discussion/javascript-sdk-move-apiclients-uselegacyparameterfilter-default-value-to-false-for-correct-api-query-parameter-processing-boolean-integer-number)).
* The SDK used to ignore (filter out) method parameters mapped to HTTP query parameters of type boolean when their value was false, and HTTP query parameters of type integer/number when their value was 0.
* Starting with this version, the SDK will properly take into account and transmit API HTTP query parameters of type boolean and HTTP query parameters of type integer/number.


# Major Changes (0 changes)


# Minor Changes (0 changes)


# Point Changes (0 changes)
