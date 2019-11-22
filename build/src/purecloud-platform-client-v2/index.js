
import PureCloudRegionHosts from './PureCloudRegionHosts.js';
import ApiClient from './ApiClient.js';
import AlertingApi from './api/AlertingApi.js';
import AnalyticsApi from './api/AnalyticsApi.js';
import ArchitectApi from './api/ArchitectApi.js';
import AuthorizationApi from './api/AuthorizationApi.js';
import BillingApi from './api/BillingApi.js';
import ContentManagementApi from './api/ContentManagementApi.js';
import ConversationsApi from './api/ConversationsApi.js';
import ExternalContactsApi from './api/ExternalContactsApi.js';
import FaxApi from './api/FaxApi.js';
import FlowsApi from './api/FlowsApi.js';
import GeneralDataProtectionRegulationApi from './api/GeneralDataProtectionRegulationApi.js';
import GeolocationApi from './api/GeolocationApi.js';
import GreetingsApi from './api/GreetingsApi.js';
import GroupsApi from './api/GroupsApi.js';
import IdentityProviderApi from './api/IdentityProviderApi.js';
import IntegrationsApi from './api/IntegrationsApi.js';
import LanguagesApi from './api/LanguagesApi.js';
import LicenseApi from './api/LicenseApi.js';
import LocationsApi from './api/LocationsApi.js';
import MessagingApi from './api/MessagingApi.js';
import MobileDevicesApi from './api/MobileDevicesApi.js';
import NotificationsApi from './api/NotificationsApi.js';
import OAuthApi from './api/OAuthApi.js';
import ObjectsApi from './api/ObjectsApi.js';
import OrganizationApi from './api/OrganizationApi.js';
import OrganizationAuthorizationApi from './api/OrganizationAuthorizationApi.js';
import OutboundApi from './api/OutboundApi.js';
import PresenceApi from './api/PresenceApi.js';
import QualityApi from './api/QualityApi.js';
import RecordingApi from './api/RecordingApi.js';
import ResponseManagementApi from './api/ResponseManagementApi.js';
import RoutingApi from './api/RoutingApi.js';
import SCIMApi from './api/SCIMApi.js';
import ScriptsApi from './api/ScriptsApi.js';
import SearchApi from './api/SearchApi.js';
import SpeechTextAnalyticsApi from './api/SpeechTextAnalyticsApi.js';
import StationsApi from './api/StationsApi.js';
import SuggestApi from './api/SuggestApi.js';
import TelephonyApi from './api/TelephonyApi.js';
import TelephonyProvidersEdgeApi from './api/TelephonyProvidersEdgeApi.js';
import TokensApi from './api/TokensApi.js';
import UserRecordingsApi from './api/UserRecordingsApi.js';
import UsersApi from './api/UsersApi.js';
import UtilitiesApi from './api/UtilitiesApi.js';
import VoicemailApi from './api/VoicemailApi.js';
import WebChatApi from './api/WebChatApi.js';
import WidgetsApi from './api/WidgetsApi.js';
import WorkforceManagementApi from './api/WorkforceManagementApi.js';


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
 * @version 63.0.0
 */
class platformClient {
	constructor() {
		/**
		 * The ApiClient constructor.
		 * @property {module:purecloud-platform-client-v2/ApiClient}
		 */
		this.ApiClient = new ApiClient();
		/**
		 * The ApiClient class.
		 * @property {module:purecloud-platform-client-v2/ApiClient}
		 */
		this.ApiClientClass = ApiClient;
		/**
		 * The AlertingApi service constructor.
		 * @property {module:purecloud-platform-client-v2/api/AlertingApi}
		 */
		this.AlertingApi = AlertingApi;
		/**
		 * The AnalyticsApi service constructor.
		 * @property {module:purecloud-platform-client-v2/api/AnalyticsApi}
		 */
		this.AnalyticsApi = AnalyticsApi;
		/**
		 * The ArchitectApi service constructor.
		 * @property {module:purecloud-platform-client-v2/api/ArchitectApi}
		 */
		this.ArchitectApi = ArchitectApi;
		/**
		 * The AuthorizationApi service constructor.
		 * @property {module:purecloud-platform-client-v2/api/AuthorizationApi}
		 */
		this.AuthorizationApi = AuthorizationApi;
		/**
		 * The BillingApi service constructor.
		 * @property {module:purecloud-platform-client-v2/api/BillingApi}
		 */
		this.BillingApi = BillingApi;
		/**
		 * The ContentManagementApi service constructor.
		 * @property {module:purecloud-platform-client-v2/api/ContentManagementApi}
		 */
		this.ContentManagementApi = ContentManagementApi;
		/**
		 * The ConversationsApi service constructor.
		 * @property {module:purecloud-platform-client-v2/api/ConversationsApi}
		 */
		this.ConversationsApi = ConversationsApi;
		/**
		 * The ExternalContactsApi service constructor.
		 * @property {module:purecloud-platform-client-v2/api/ExternalContactsApi}
		 */
		this.ExternalContactsApi = ExternalContactsApi;
		/**
		 * The FaxApi service constructor.
		 * @property {module:purecloud-platform-client-v2/api/FaxApi}
		 */
		this.FaxApi = FaxApi;
		/**
		 * The FlowsApi service constructor.
		 * @property {module:purecloud-platform-client-v2/api/FlowsApi}
		 */
		this.FlowsApi = FlowsApi;
		/**
		 * The GeneralDataProtectionRegulationApi service constructor.
		 * @property {module:purecloud-platform-client-v2/api/GeneralDataProtectionRegulationApi}
		 */
		this.GeneralDataProtectionRegulationApi = GeneralDataProtectionRegulationApi;
		/**
		 * The GeolocationApi service constructor.
		 * @property {module:purecloud-platform-client-v2/api/GeolocationApi}
		 */
		this.GeolocationApi = GeolocationApi;
		/**
		 * The GreetingsApi service constructor.
		 * @property {module:purecloud-platform-client-v2/api/GreetingsApi}
		 */
		this.GreetingsApi = GreetingsApi;
		/**
		 * The GroupsApi service constructor.
		 * @property {module:purecloud-platform-client-v2/api/GroupsApi}
		 */
		this.GroupsApi = GroupsApi;
		/**
		 * The IdentityProviderApi service constructor.
		 * @property {module:purecloud-platform-client-v2/api/IdentityProviderApi}
		 */
		this.IdentityProviderApi = IdentityProviderApi;
		/**
		 * The IntegrationsApi service constructor.
		 * @property {module:purecloud-platform-client-v2/api/IntegrationsApi}
		 */
		this.IntegrationsApi = IntegrationsApi;
		/**
		 * The LanguagesApi service constructor.
		 * @property {module:purecloud-platform-client-v2/api/LanguagesApi}
		 */
		this.LanguagesApi = LanguagesApi;
		/**
		 * The LicenseApi service constructor.
		 * @property {module:purecloud-platform-client-v2/api/LicenseApi}
		 */
		this.LicenseApi = LicenseApi;
		/**
		 * The LocationsApi service constructor.
		 * @property {module:purecloud-platform-client-v2/api/LocationsApi}
		 */
		this.LocationsApi = LocationsApi;
		/**
		 * The MessagingApi service constructor.
		 * @property {module:purecloud-platform-client-v2/api/MessagingApi}
		 */
		this.MessagingApi = MessagingApi;
		/**
		 * The MobileDevicesApi service constructor.
		 * @property {module:purecloud-platform-client-v2/api/MobileDevicesApi}
		 */
		this.MobileDevicesApi = MobileDevicesApi;
		/**
		 * The NotificationsApi service constructor.
		 * @property {module:purecloud-platform-client-v2/api/NotificationsApi}
		 */
		this.NotificationsApi = NotificationsApi;
		/**
		 * The OAuthApi service constructor.
		 * @property {module:purecloud-platform-client-v2/api/OAuthApi}
		 */
		this.OAuthApi = OAuthApi;
		/**
		 * The ObjectsApi service constructor.
		 * @property {module:purecloud-platform-client-v2/api/ObjectsApi}
		 */
		this.ObjectsApi = ObjectsApi;
		/**
		 * The OrganizationApi service constructor.
		 * @property {module:purecloud-platform-client-v2/api/OrganizationApi}
		 */
		this.OrganizationApi = OrganizationApi;
		/**
		 * The OrganizationAuthorizationApi service constructor.
		 * @property {module:purecloud-platform-client-v2/api/OrganizationAuthorizationApi}
		 */
		this.OrganizationAuthorizationApi = OrganizationAuthorizationApi;
		/**
		 * The OutboundApi service constructor.
		 * @property {module:purecloud-platform-client-v2/api/OutboundApi}
		 */
		this.OutboundApi = OutboundApi;
		/**
		 * The PresenceApi service constructor.
		 * @property {module:purecloud-platform-client-v2/api/PresenceApi}
		 */
		this.PresenceApi = PresenceApi;
		/**
		 * The QualityApi service constructor.
		 * @property {module:purecloud-platform-client-v2/api/QualityApi}
		 */
		this.QualityApi = QualityApi;
		/**
		 * The RecordingApi service constructor.
		 * @property {module:purecloud-platform-client-v2/api/RecordingApi}
		 */
		this.RecordingApi = RecordingApi;
		/**
		 * The ResponseManagementApi service constructor.
		 * @property {module:purecloud-platform-client-v2/api/ResponseManagementApi}
		 */
		this.ResponseManagementApi = ResponseManagementApi;
		/**
		 * The RoutingApi service constructor.
		 * @property {module:purecloud-platform-client-v2/api/RoutingApi}
		 */
		this.RoutingApi = RoutingApi;
		/**
		 * The SCIMApi service constructor.
		 * @property {module:purecloud-platform-client-v2/api/SCIMApi}
		 */
		this.SCIMApi = SCIMApi;
		/**
		 * The ScriptsApi service constructor.
		 * @property {module:purecloud-platform-client-v2/api/ScriptsApi}
		 */
		this.ScriptsApi = ScriptsApi;
		/**
		 * The SearchApi service constructor.
		 * @property {module:purecloud-platform-client-v2/api/SearchApi}
		 */
		this.SearchApi = SearchApi;
		/**
		 * The SpeechTextAnalyticsApi service constructor.
		 * @property {module:purecloud-platform-client-v2/api/SpeechTextAnalyticsApi}
		 */
		this.SpeechTextAnalyticsApi = SpeechTextAnalyticsApi;
		/**
		 * The StationsApi service constructor.
		 * @property {module:purecloud-platform-client-v2/api/StationsApi}
		 */
		this.StationsApi = StationsApi;
		/**
		 * The SuggestApi service constructor.
		 * @property {module:purecloud-platform-client-v2/api/SuggestApi}
		 */
		this.SuggestApi = SuggestApi;
		/**
		 * The TelephonyApi service constructor.
		 * @property {module:purecloud-platform-client-v2/api/TelephonyApi}
		 */
		this.TelephonyApi = TelephonyApi;
		/**
		 * The TelephonyProvidersEdgeApi service constructor.
		 * @property {module:purecloud-platform-client-v2/api/TelephonyProvidersEdgeApi}
		 */
		this.TelephonyProvidersEdgeApi = TelephonyProvidersEdgeApi;
		/**
		 * The TokensApi service constructor.
		 * @property {module:purecloud-platform-client-v2/api/TokensApi}
		 */
		this.TokensApi = TokensApi;
		/**
		 * The UserRecordingsApi service constructor.
		 * @property {module:purecloud-platform-client-v2/api/UserRecordingsApi}
		 */
		this.UserRecordingsApi = UserRecordingsApi;
		/**
		 * The UsersApi service constructor.
		 * @property {module:purecloud-platform-client-v2/api/UsersApi}
		 */
		this.UsersApi = UsersApi;
		/**
		 * The UtilitiesApi service constructor.
		 * @property {module:purecloud-platform-client-v2/api/UtilitiesApi}
		 */
		this.UtilitiesApi = UtilitiesApi;
		/**
		 * The VoicemailApi service constructor.
		 * @property {module:purecloud-platform-client-v2/api/VoicemailApi}
		 */
		this.VoicemailApi = VoicemailApi;
		/**
		 * The WebChatApi service constructor.
		 * @property {module:purecloud-platform-client-v2/api/WebChatApi}
		 */
		this.WebChatApi = WebChatApi;
		/**
		 * The WidgetsApi service constructor.
		 * @property {module:purecloud-platform-client-v2/api/WidgetsApi}
		 */
		this.WidgetsApi = WidgetsApi;
		/**
		 * The WorkforceManagementApi service constructor.
		 * @property {module:purecloud-platform-client-v2/api/WorkforceManagementApi}
		 */
		this.WorkforceManagementApi = WorkforceManagementApi;
		/**
		 * The PureCloudRegionsHost Object.
		 * @property {module:purecloud-platform-client-v2/MyPureCloudRegionHost}
		 */
		this.PureCloudRegionHosts = PureCloudRegionHosts;
		
		
	}
}

//export default platformClient;
export default new platformClient();
