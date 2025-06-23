import Logger from './logger.js';

class Configuration {
	/**
	 * Singleton getter
	 */
	get instance() {
		return Configuration.instance;
	}

	/**
	 * Singleton setter
	 */
	set instance(value) {
		Configuration.instance = value;
	}

	constructor() {
		if (!Configuration.instance) {
			Configuration.instance = this;
		}

		if (typeof window !== 'undefined') {
			this.configPath = '';
		} else {
			const os = require('os');
			const path = require('path');
			this.configPath = path.join(os.homedir(), '.genesyscloudjavascript', 'config');
		}
		this.watchedConfigPath;
		this.refresh_access_token = true;
		this.refresh_token_wait_max = 10;
		this._live_reload_config = true;
		this.host;
		this.environment;
		this.basePath;
		this.authUrl;
		this.config;
		this.gateway = undefined;
		this.logger = new Logger();
		this.setEnvironment();
		this.liveLoadConfig();
	}

	/**
	 * live_reload_config getter
	 */
	get live_reload_config() {
		return this._live_reload_config;
	}

	/**
	 * live_reload_config setter
	 */
	set live_reload_config(value) {
		if (typeof window === 'undefined') {
			const fs = require('fs');
			if (value !== null && value !== undefined) {
				if (this.live_reload_config !== value) {
					this._live_reload_config = value;
					// Stop existing listener (if already started)
					if (this.watchedConfigPath) {
						fs.unwatchFile(this.watchedConfigPath);
						this.watchedConfigPath = null;
					}
					// Start listener if requested
					if (value === true) {
						this.liveLoadConfig();
					}
				}
			}
			return;
		}
		// If in browser, don't read config file, use default values
		this._live_reload_config = false;
	}

	liveLoadConfig() {
		if (typeof window === 'undefined') {
			// Please don't remove the typeof window === 'undefined' check here!
			// This safeguards the browser environment from using `fs`, which is only
			// available in node environment.
			this.updateConfigFromFile();

			if (this.live_reload_config && this.live_reload_config === true && this.configPath) {
				try {
					const fs = require('fs');
					this.watchedConfigPath = this.configPath;
					fs.watchFile(this.watchedConfigPath, { persistent: false }, (eventType, filename) => {
						this.updateConfigFromFile();
						if (!this.live_reload_config) {
							if (this.watchedConfigPath) {
								fs.unwatchFile(this.watchedConfigPath);
								this.watchedConfigPath = null;
							}
						}
					});
				} catch (err) {
					// do nothing
					this.watchedConfigPath = null;
				}
			}
			return;
		}
		// If in browser, don't read config file, use default values
		this.configPath = '';
	}

	setConfigPath(path) {
		if (typeof window === 'undefined') {
			const fs = require('fs');
			if (path && path !== this.configPath) {
				this.configPath = path;
				if (this.watchedConfigPath) {
					fs.unwatchFile(this.watchedConfigPath);
					this.watchedConfigPath = null;
				}
				this.liveLoadConfig();
			} else if (!path && this.configPath) {
				this.configPath = '';
				if (this.watchedConfigPath) {
					fs.unwatchFile(this.watchedConfigPath);
					this.watchedConfigPath = null;
				};
			}
			return;
		}
		// If in browser, don't read config file, use default values
		this.configPath = '';
	}

	updateConfigFromFile() {
		if (typeof window === 'undefined') {
			// Please don't remove the typeof window === 'undefined' check here!
			// This safeguards the browser environment from using `fs`, which is only
			// available in node environment.
			if (this.configPath) {
				const ConfigParser = require('configparser');

				try {
					var configparser = new ConfigParser();
					configparser.read(this.configPath); // If no error catched, indicates it's INI format
					this.config = configparser;
				} catch (error) {
					if (error.name && error.name === 'MissingSectionHeaderError') {
						// Not INI format, see if it's JSON format
						const fs = require('fs');
						var configData = fs.readFileSync(this.configPath, 'utf8');
						this.config = {
							_sections: JSON.parse(configData), // To match INI data format
						};
					}
				}

				if (this.config) this.updateConfigValues();
			}
		}
	}

	updateConfigValues() {
		this.logger.log_level = this.logger.getLogLevel(this.getConfigString('logging', 'log_level'));
		this.logger.log_format = this.logger.getLogFormat(this.getConfigString('logging', 'log_format'));
		this.logger.log_to_console =
			this.getConfigBoolean('logging', 'log_to_console') !== undefined
				? this.getConfigBoolean('logging', 'log_to_console')
				: this.logger.log_to_console;
		this.logger.log_file_path =
			this.getConfigString('logging', 'log_file_path') !== undefined
				? this.getConfigString('logging', 'log_file_path')
				: this.logger.log_file_path;
		this.logger.log_response_body =
			this.getConfigBoolean('logging', 'log_response_body') !== undefined
				? this.getConfigBoolean('logging', 'log_response_body')
				: this.logger.log_response_body;
		this.logger.log_request_body =
			this.getConfigBoolean('logging', 'log_request_body') !== undefined
				? this.getConfigBoolean('logging', 'log_request_body')
				: this.logger.log_request_body;
		this.refresh_access_token =
			this.getConfigBoolean('reauthentication', 'refresh_access_token') !== undefined
				? this.getConfigBoolean('reauthentication', 'refresh_access_token')
				: this.refresh_access_token;
		this.refresh_token_wait_max =
			this.getConfigInt('reauthentication', 'refresh_token_wait_max') !== undefined
				? this.getConfigInt('reauthentication', 'refresh_token_wait_max')
				: this.refresh_token_wait_max;
		this.live_reload_config =
			this.getConfigBoolean('general', 'live_reload_config') !== undefined
				? this.getConfigBoolean('general', 'live_reload_config')
				: this.live_reload_config;
		this.host = this.getConfigString('general', 'host') !== undefined ? this.getConfigString('general', 'host') : this.host;

		if (this.getConfigString('gateway', 'host') !== undefined) {
			let gateway = {
				host: this.getConfigString('gateway', 'host')
			};
			if (this.getConfigString('gateway', 'protocol') !== undefined) gateway.protocol = this.getConfigString('gateway', 'protocol');
			if (this.getConfigInt('gateway', 'port') !== undefined) gateway.port = this.getConfigInt('gateway', 'port');
			if (this.getConfigString('gateway', 'path_params_login') !== undefined) gateway.path_params_login = this.getConfigString('gateway', 'path_params_login');
			if (this.getConfigString('gateway', 'path_params_api') !== undefined) gateway.path_params_api = this.getConfigString('gateway', 'path_params_api');
			if (this.getConfigString('gateway', 'username') !== undefined) gateway.username = this.getConfigString('gateway', 'username');
			if (this.getConfigString('gateway', 'password') !== undefined) gateway.password = this.getConfigString('gateway', 'password');
			this.setGateway(gateway);
		} else {
			this.setGateway();
		}

		this.setEnvironment();

		// Update logging configs
		this.logger.setLogger();
	}

	/**
	 * @description Sets the gateway used by the session
	 * @param {object} gateway - Gateway Configuration interface
	 * @param {string} gateway.host - The address of the gateway.
	 * @param {string} gateway.protocol - (optional) The protocol to use. It will default to "https" if the parameter is not defined or empty.
	 * @param {number} gateway.port - (optional) The port to target. This parameter can be defined if a non default port is used and needs to be specified in the url (value must be greater or equal to 0).
	 * @param {string} gateway.path_params_login - (optional) An arbitrary string to be appended to the gateway url path for Login requests.
	 * @param {string} gateway.path_params_api - (optional) An arbitrary string to be appended to the gateway url path for API requests.
	 * @param {string} gateway.username - (optional) Not used at this stage (for a possible future use).
	 * @param {string} gateway.password - (optional) Not used at this stage (for a possible future use).
	 */
	setGateway(gateway) {
		if (gateway) {
			this.gateway = {
				host: ''
			};

			if (gateway.protocol) this.gateway.protocol = gateway.protocol;
			else this.gateway.protocol = 'https';
			
			if (gateway.host) this.gateway.host = gateway.host;
			else this.gateway.host = '';

			if (gateway.port && gateway.port > -1) this.gateway.port = gateway.port;
			else this.gateway.port = -1;

			if (gateway.path_params_login) {
				this.gateway.path_params_login = gateway.path_params_login;
				// Strip trailing slash
				this.gateway.path_params_login = this.gateway.path_params_login.replace(/\/+$/, '');
			} else this.gateway.path_params_login = '';

			if (gateway.path_params_api) {
				this.gateway.path_params_api = gateway.path_params_api;
				// Strip trailing slash
				this.gateway.path_params_api = this.gateway.path_params_api.replace(/\/+$/, '');
			} else this.gateway.path_params_api = '';

			if (gateway.username) this.gateway.username = gateway.username;
			if (gateway.password) this.gateway.password = gateway.password;
		} else {
			this.gateway = undefined;
		}
	}



	setEnvironment(env) {
		// Default value
		if (env) this.environment = env;
		else this.environment = this.host ? this.host : 'mypurecloud.com';

		// Strip trailing slash
		this.environment = this.environment.replace(/\/+$/, '');

		// Strip protocol and subdomain
		if (this.environment.startsWith('https://')) this.environment = this.environment.substring(8);
		if (this.environment.startsWith('http://')) this.environment = this.environment.substring(7);
		if (this.environment.startsWith('api.')) this.environment = this.environment.substring(4);

		this.basePath = `https://api.${this.environment}`;
		this.authUrl = `https://login.${this.environment}`;
	}

	getConfUrl(pathType, regionUrl) {
		if (!this.gateway) return regionUrl;
		if (!this.gateway.host) return regionUrl;
		
		var url = this.gateway.protocol + '://' + this.gateway.host;
		if (this.gateway.port > -1) url = url + ':' + this.gateway.port.toString();
		if (pathType === 'login') {
			if (this.gateway.path_params_login) {
				if (this.gateway.path_params_login.startsWith('/')) url = url + this.gateway.path_params_login;
				else url = url + '/' + this.gateway.path_params_login;
			}
		} else {
			if (this.gateway.path_params_api) {
				if (this.gateway.path_params_api.startsWith('/')) url = url + this.gateway.path_params_api;
				else url = url + '/' + this.gateway.path_params_api;
			}
		}
		return url;
	}

	getConfigString(section, key) {
		if (this.config._sections[section]) return this.config._sections[section][key];
	}

	getConfigBoolean(section, key) {
		if (this.config._sections[section] && this.config._sections[section][key] !== undefined) {
			if (typeof this.config._sections[section][key] === 'string') {
				return this.config._sections[section][key] === 'true';
			} else return this.config._sections[section][key];
		}
	}

	getConfigInt(section, key) {
		if (this.config._sections[section] && this.config._sections[section][key]) {
			if (typeof this.config._sections[section][key] === 'string') {
				return parseInt(this.config._sections[section][key]);
			} else return this.config._sections[section][key];
		}
	}
}

export default Configuration;
