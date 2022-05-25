
const logLevels = {
	levels: {
		none: 0,
		error: 1,
		debug: 2,
		trace: 3,
	},
};

const logLevelEnum = {
	level: {
		LNone: 'none',
		LError: 'error',
		LDebug: 'debug',
		LTrace: 'trace',
	},
};

const logFormatEnum = {
	formats: {
		JSON: 'json',
		TEXT: 'text',
	},
};

class Logger {
	get logLevelEnum() {
		return logLevelEnum;
	}

	get logFormatEnum() {
		return logFormatEnum;
	}

	constructor() {
		this.log_level = logLevelEnum.level.LNone;
		this.log_format = logFormatEnum.formats.TEXT;
		this.log_to_console = true;
		this.log_file_path;
		this.log_response_body = false;
		this.log_request_body = false;

		this.setLogger();
	}

	setLogger() {
		if(typeof window === 'undefined') {
			const winston = require('winston');
			this.logger = winston.createLogger({
				levels: logLevels.levels,
				level: this.log_level,
			});
			if (this.log_file_path && this.log_file_path !== '') {
				if (this.log_format === logFormatEnum.formats.JSON) {
					this.logger.add(new winston.transports.File({ format: winston.format.json(), filename: this.log_file_path }));
				} else {
					this.logger.add(
						new winston.transports.File({
							format: winston.format.combine(
								winston.format((info) => {
									info.level = info.level.toUpperCase();
									return info;
								})(),
								winston.format.simple()
							),
							filename: this.log_file_path,
						})
					);
				}
			}
			if (this.log_to_console) {
				if (this.log_format === logFormatEnum.formats.JSON) {
					this.logger.add(new winston.transports.Console({ format: winston.format.json() }));
				} else {
					this.logger.add(
						new winston.transports.Console({
							format: winston.format.combine(
								winston.format((info) => {
									info.level = info.level.toUpperCase();
									return info;
								})(),
								winston.format.simple()
							),
						})
					);
				}
			}
		}
	}

	log(level, statusCode, method, url, requestHeaders, responseHeaders, requestBody, responseBody) {
		var content = this.formatLog(level, statusCode, method, url, requestHeaders, responseHeaders, requestBody, responseBody);
		if (typeof window !== 'undefined') {
			var shouldLog = this.calculateLogLevel(level);
			if (shouldLog > 0 && this.log_to_console === true) {
				if(this.log_format === this.logFormatEnum.formats.JSON) {
					console.log(content);
				} else {
			 		console.log(`${level.toUpperCase()}: ${content}`);
				}
			}
		} else {
			if (this.logger.transports.length > 0) this.logger.log(level, content);
		}
	}

	calculateLogLevel(level) {
		switch (this.log_level) {
			case this.logLevelEnum.level.LError:
				if (level !== this.logLevelEnum.level.LError) {
					return -1;
				}
				return 1;
			case this.logLevelEnum.level.LDebug:
				if (level === this.logLevelEnum.level.LTrace) {
					return -1;
				}
				return 1;
			case this.logLevelEnum.level.LTrace:
				return 1;
			default:
				return -1;
		}
	}

	formatLog(level, statusCode, method, url, requestHeaders, responseHeaders, requestBody, responseBody) {
		var result;
		var localRequestHeaders = requestHeaders ? JSON.parse(JSON.stringify(requestHeaders)) : null;
		var localResponseHeaders = responseHeaders ? JSON.parse(JSON.stringify(responseHeaders)) : null;
		var localRequestBody = requestBody ? JSON.parse(JSON.stringify(requestBody)) : null;
		var localResponseBody = responseBody ? JSON.parse(JSON.stringify(responseBody)) : null;
		if (requestHeaders) localRequestHeaders['Authorization'] = '[REDACTED]';
		if (!this.log_request_body) localRequestBody = undefined;
		if (!this.log_response_body) localResponseBody = undefined;
		if (this.log_format && this.log_format === logFormatEnum.formats.JSON) {
			result = {
				level: level,
				date: new Date().toISOString(),
				method: method,
				url: decodeURIComponent(url),
				correlationId: localResponseHeaders ? (localResponseHeaders['inin-correlation-id'] ? localResponseHeaders['inin-correlation-id'] : '') : '',
				statusCode: statusCode,
			};
			if (localRequestHeaders) result.requestHeaders = localRequestHeaders;
			if (localResponseHeaders) result.responseHeaders = localResponseHeaders;
			if (localRequestBody) result.requestBody = localRequestBody;
			if (localResponseBody) result.responseBody = localResponseBody;
		} else {
			result = `${new Date().toISOString()}
=== REQUEST === 
${this.formatValue('URL', decodeURIComponent(url))}${this.formatValue('Method', method)}${this.formatValue(
				'Headers',
				this.formatHeaderString(localRequestHeaders)
			)}${this.formatValue('Body', localRequestBody ? JSON.stringify(localRequestBody, null, 2) : '')}
=== RESPONSE ===
${this.formatValue('Status', statusCode)}${this.formatValue('Headers', this.formatHeaderString(localResponseHeaders))}${this.formatValue(
				'CorrelationId',
				localResponseHeaders ? (localResponseHeaders['inin-correlation-id'] ? localResponseHeaders['inin-correlation-id'] : '') : ''
			)}${this.formatValue('Body', localResponseBody ? JSON.stringify(localResponseBody, null, 2) : '')}`;
		}

		return result;
	}

	formatHeaderString(headers) {
		var headerString = '';
		if (!headers) return headerString;
		for (const [key, value] of Object.entries(headers)) {
			headerString += `\n\t${key}: ${value}`;
		}
		return headerString;
	}

	formatValue(key, value) {
		if (!value || value === '' || value === '{}') return '';
		return `${key}: ${value}\n`;
	}

	getLogLevel(level) {
		switch (level) {
			case 'error':
				return logLevelEnum.level.LError;
			case 'debug':
				return logLevelEnum.level.LDebug;
			case 'trace':
				return logLevelEnum.level.LTrace;
			default:
				return logLevelEnum.level.LNone;
		}
	}

	getLogFormat(format) {
		switch (format) {
			case 'json':
				return logFormatEnum.formats.JSON;
			default:
				return logFormatEnum.formats.TEXT;
		}
	}
}

export default Logger;
