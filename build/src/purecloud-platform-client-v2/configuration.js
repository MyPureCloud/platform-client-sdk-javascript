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
		this.refresh_access_token = true;
		this.refresh_token_wait_max = 10;
		this.live_reload_config = true;
		this.host;
		this.environment;
		this.basePath;
		this.authUrl;
		this.config;
		this.logger = new Logger();
		this.setEnvironment();
		this.liveLoadConfig();
	}

	liveLoadConfig() {
		if (typeof window === 'undefined') {
			// Please don't remove the typeof window === 'undefined' check here!
			// This safeguards the browser environment from using `fs`, which is only
			// available in node environment.
			this.updateConfigFromFile();

			if (this.live_reload_config && this.live_reload_config === true) {
				try {
					const fs = require('fs');
					fs.watchFile(this.configPath, { persistent: false }, (eventType, filename) => {
						this.updateConfigFromFile();
						if (!this.live_reload_config) {
							fs.unwatchFile(this.configPath);
						}
					});
				} catch (err) {
					// do nothing
				}
			}
			return;
		}
		// If in browser, don't read config file, use default values
		this.configPath = '';
	}

	setConfigPath(path) {
		if (path && path !== this.configPath) {
			this.configPath = path;
			this.liveLoadConfig();
		}
	}

	updateConfigFromFile() {
		if (typeof window === 'undefined') {
			// Please don't remove the typeof window === 'undefined' check here!
			// This safeguards the browser environment from using `fs`, which is only
			// available in node environment.
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

		this.setEnvironment();

		// Update logging configs
		this.logger.setLogger();
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
