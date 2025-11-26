Platform API version: 9782


## Release Notes

This release implements a change in the **computePKCECodeChallenge** method, used in the **loginPKCEGrant** method and flow. Until now, the SDK source code was making use of **Buffer.from** method to compute the PKCE Code Challenge.

When building the web-cjs version of the library, we injected polyfills to manage methods, like the **Buffer.from**, which are not supported in browser based javascript. The **loginPKCEGrant** method was therefore fully functionnal without making additional configuration in a javascript project when using the web-cjs version of the Javascript SDK.

For the node version of the library, used for a web client oriented project, no specific action was taken. In the past, bundlers (like webpack) used to inject these polyfills by default, allowing the node version library to also be functional in a project using a web framework (like vite, react, ...) and a bundler. These bundlers (like webpack) have ceased to import polyfills by default and they must be specifically declared in the web project configuration.

To avoid this additional configuration when using the node version of the library in a web client oriented project, the **computePKCECodeChallenge** method has been updated to use native Web API methods instead of **Buffer.from**. This change also applies to the web-cjs version of the library. Therefore, no specific bundler configuration should be necessary to manage the **loginPKCEGrant** method and flow.


# Major Changes (0 changes)


# Minor Changes (0 changes)


# Point Changes (0 changes)
