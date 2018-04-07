(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['purecloud-platform-client-v2/ApiClient', 'purecloud-platform-client-v2/api/AlertingApi', 'purecloud-platform-client-v2/api/AnalyticsApi', 'purecloud-platform-client-v2/api/ArchitectApi', 'purecloud-platform-client-v2/api/AttributesApi', 'purecloud-platform-client-v2/api/AuthorizationApi', 'purecloud-platform-client-v2/api/BillingApi', 'purecloud-platform-client-v2/api/ContentManagementApi', 'purecloud-platform-client-v2/api/ConversationsApi', 'purecloud-platform-client-v2/api/ExternalContactsApi', 'purecloud-platform-client-v2/api/FaxApi', 'purecloud-platform-client-v2/api/GeolocationApi', 'purecloud-platform-client-v2/api/GreetingsApi', 'purecloud-platform-client-v2/api/GroupsApi', 'purecloud-platform-client-v2/api/IdentityProviderApi', 'purecloud-platform-client-v2/api/IntegrationsApi', 'purecloud-platform-client-v2/api/LanguagesApi', 'purecloud-platform-client-v2/api/LicenseApi', 'purecloud-platform-client-v2/api/LocationsApi', 'purecloud-platform-client-v2/api/MobileDevicesApi', 'purecloud-platform-client-v2/api/NotificationsApi', 'purecloud-platform-client-v2/api/OAuthApi', 'purecloud-platform-client-v2/api/ObjectsApi', 'purecloud-platform-client-v2/api/OrganizationApi', 'purecloud-platform-client-v2/api/OrganizationAuthorizationApi', 'purecloud-platform-client-v2/api/OutboundApi', 'purecloud-platform-client-v2/api/PresenceApi', 'purecloud-platform-client-v2/api/QualityApi', 'purecloud-platform-client-v2/api/RecordingApi', 'purecloud-platform-client-v2/api/ResponseManagementApi', 'purecloud-platform-client-v2/api/RoutingApi', 'purecloud-platform-client-v2/api/ScriptsApi', 'purecloud-platform-client-v2/api/SearchApi', 'purecloud-platform-client-v2/api/StationsApi', 'purecloud-platform-client-v2/api/SuggestApi', 'purecloud-platform-client-v2/api/TelephonyProvidersEdgeApi', 'purecloud-platform-client-v2/api/TokensApi', 'purecloud-platform-client-v2/api/UserRecordingsApi', 'purecloud-platform-client-v2/api/UsersApi', 'purecloud-platform-client-v2/api/UtilitiesApi', 'purecloud-platform-client-v2/api/VoicemailApi', 'purecloud-platform-client-v2/api/WebChatApi', 'purecloud-platform-client-v2/api/WorkforceManagementApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./api/AlertingApi'), require('./api/AnalyticsApi'), require('./api/ArchitectApi'), require('./api/AttributesApi'), require('./api/AuthorizationApi'), require('./api/BillingApi'), require('./api/ContentManagementApi'), require('./api/ConversationsApi'), require('./api/ExternalContactsApi'), require('./api/FaxApi'), require('./api/GeolocationApi'), require('./api/GreetingsApi'), require('./api/GroupsApi'), require('./api/IdentityProviderApi'), require('./api/IntegrationsApi'), require('./api/LanguagesApi'), require('./api/LicenseApi'), require('./api/LocationsApi'), require('./api/MobileDevicesApi'), require('./api/NotificationsApi'), require('./api/OAuthApi'), require('./api/ObjectsApi'), require('./api/OrganizationApi'), require('./api/OrganizationAuthorizationApi'), require('./api/OutboundApi'), require('./api/PresenceApi'), require('./api/QualityApi'), require('./api/RecordingApi'), require('./api/ResponseManagementApi'), require('./api/RoutingApi'), require('./api/ScriptsApi'), require('./api/SearchApi'), require('./api/StationsApi'), require('./api/SuggestApi'), require('./api/TelephonyProvidersEdgeApi'), require('./api/TokensApi'), require('./api/UserRecordingsApi'), require('./api/UsersApi'), require('./api/UtilitiesApi'), require('./api/VoicemailApi'), require('./api/WebChatApi'), require('./api/WorkforceManagementApi'));
  }
}(function(ApiClient, AlertingApi, AnalyticsApi, ArchitectApi, AttributesApi, AuthorizationApi, BillingApi, ContentManagementApi, ConversationsApi, ExternalContactsApi, FaxApi, GeolocationApi, GreetingsApi, GroupsApi, IdentityProviderApi, IntegrationsApi, LanguagesApi, LicenseApi, LocationsApi, MobileDevicesApi, NotificationsApi, OAuthApi, ObjectsApi, OrganizationApi, OrganizationAuthorizationApi, OutboundApi, PresenceApi, QualityApi, RecordingApi, ResponseManagementApi, RoutingApi, ScriptsApi, SearchApi, StationsApi, SuggestApi, TelephonyProvidersEdgeApi, TokensApi, UserRecordingsApi, UsersApi, UtilitiesApi, VoicemailApi, WebChatApi, WorkforceManagementApi) {
  'use strict';

  /**
   * A JavaScript library to interface with the PureCloud Platform API.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var platformClient = require('purecloud-platform-client-v2/index'); // See note below*.
   * var xxxSvc = new platformClient.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new platformClient.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['purecloud-platform-client-v2/index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new platformClient.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new platformClient.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module purecloud-platform-client-v2/index
   * @version 23.0.0
   */
  var platformClient = {
    /**
     * The ApiClient constructor.
     * @property {module:purecloud-platform-client-v2/ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AlertingApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/AlertingApi}
     */
    AlertingApi: AlertingApi,
    /**
     * The AnalyticsApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/AnalyticsApi}
     */
    AnalyticsApi: AnalyticsApi,
    /**
     * The ArchitectApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/ArchitectApi}
     */
    ArchitectApi: ArchitectApi,
    /**
     * The AttributesApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/AttributesApi}
     */
    AttributesApi: AttributesApi,
    /**
     * The AuthorizationApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/AuthorizationApi}
     */
    AuthorizationApi: AuthorizationApi,
    /**
     * The BillingApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/BillingApi}
     */
    BillingApi: BillingApi,
    /**
     * The ContentManagementApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/ContentManagementApi}
     */
    ContentManagementApi: ContentManagementApi,
    /**
     * The ConversationsApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/ConversationsApi}
     */
    ConversationsApi: ConversationsApi,
    /**
     * The ExternalContactsApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/ExternalContactsApi}
     */
    ExternalContactsApi: ExternalContactsApi,
    /**
     * The FaxApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/FaxApi}
     */
    FaxApi: FaxApi,
    /**
     * The GeolocationApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/GeolocationApi}
     */
    GeolocationApi: GeolocationApi,
    /**
     * The GreetingsApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/GreetingsApi}
     */
    GreetingsApi: GreetingsApi,
    /**
     * The GroupsApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/GroupsApi}
     */
    GroupsApi: GroupsApi,
    /**
     * The IdentityProviderApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/IdentityProviderApi}
     */
    IdentityProviderApi: IdentityProviderApi,
    /**
     * The IntegrationsApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/IntegrationsApi}
     */
    IntegrationsApi: IntegrationsApi,
    /**
     * The LanguagesApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/LanguagesApi}
     */
    LanguagesApi: LanguagesApi,
    /**
     * The LicenseApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/LicenseApi}
     */
    LicenseApi: LicenseApi,
    /**
     * The LocationsApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/LocationsApi}
     */
    LocationsApi: LocationsApi,
    /**
     * The MobileDevicesApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/MobileDevicesApi}
     */
    MobileDevicesApi: MobileDevicesApi,
    /**
     * The NotificationsApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/NotificationsApi}
     */
    NotificationsApi: NotificationsApi,
    /**
     * The OAuthApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/OAuthApi}
     */
    OAuthApi: OAuthApi,
    /**
     * The ObjectsApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/ObjectsApi}
     */
    ObjectsApi: ObjectsApi,
    /**
     * The OrganizationApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/OrganizationApi}
     */
    OrganizationApi: OrganizationApi,
    /**
     * The OrganizationAuthorizationApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/OrganizationAuthorizationApi}
     */
    OrganizationAuthorizationApi: OrganizationAuthorizationApi,
    /**
     * The OutboundApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/OutboundApi}
     */
    OutboundApi: OutboundApi,
    /**
     * The PresenceApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/PresenceApi}
     */
    PresenceApi: PresenceApi,
    /**
     * The QualityApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/QualityApi}
     */
    QualityApi: QualityApi,
    /**
     * The RecordingApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/RecordingApi}
     */
    RecordingApi: RecordingApi,
    /**
     * The ResponseManagementApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/ResponseManagementApi}
     */
    ResponseManagementApi: ResponseManagementApi,
    /**
     * The RoutingApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/RoutingApi}
     */
    RoutingApi: RoutingApi,
    /**
     * The ScriptsApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/ScriptsApi}
     */
    ScriptsApi: ScriptsApi,
    /**
     * The SearchApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/SearchApi}
     */
    SearchApi: SearchApi,
    /**
     * The StationsApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/StationsApi}
     */
    StationsApi: StationsApi,
    /**
     * The SuggestApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/SuggestApi}
     */
    SuggestApi: SuggestApi,
    /**
     * The TelephonyProvidersEdgeApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/TelephonyProvidersEdgeApi}
     */
    TelephonyProvidersEdgeApi: TelephonyProvidersEdgeApi,
    /**
     * The TokensApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/TokensApi}
     */
    TokensApi: TokensApi,
    /**
     * The UserRecordingsApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/UserRecordingsApi}
     */
    UserRecordingsApi: UserRecordingsApi,
    /**
     * The UsersApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/UsersApi}
     */
    UsersApi: UsersApi,
    /**
     * The UtilitiesApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/UtilitiesApi}
     */
    UtilitiesApi: UtilitiesApi,
    /**
     * The VoicemailApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/VoicemailApi}
     */
    VoicemailApi: VoicemailApi,
    /**
     * The WebChatApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/WebChatApi}
     */
    WebChatApi: WebChatApi,
    /**
     * The WorkforceManagementApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/WorkforceManagementApi}
     */
    WorkforceManagementApi: WorkforceManagementApi
  };

  return platformClient;
}));
