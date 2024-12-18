class HttpRequestOptions {

    constructor(url, method, headers, params, data, timeout) {
        this.setUrl(url);
        this.setMethod(method);
        if (headers) {
            this.setHeaders(headers);
        }
        if (params) {
            this.setParams(params);
        }
        if (data) {
            this.setData(data);
        }
        if (timeout !== null && timeout !== undefined) this.setTimeout(timeout);
        else this.timeout = 16000;
    }

    // Mandatory fields with validation
    setUrl(url) {
        if (!url) throw new Error("The 'url' property is required");
        this.url = url;
    }

    setMethod(method) {
        const validMethods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS', 'HEAD'];
        if (!method || !validMethods.includes(method.toUpperCase())) {
            throw new Error("The 'method' property is invalid or missing");
        }
        this.method = method.toUpperCase();
    }

    setData(data) {
        if (data === undefined || data === null) {
            throw new Error("The 'data' property is required");
        }
        this.data = data;
    }

    // Optional fields
    setParams(params) {
        if (params && typeof params !== 'object') {
            throw new Error("The 'params' property must be an object");
        }
        this.params = params;
    }

    // Optional fields
    setHeaders(headers) {
        if (headers && typeof headers !== 'object') {
            throw new Error("The 'headers' property must be an object");
        }
        this.headers = headers;
    }

    setTimeout(timeout) {
        if (timeout === undefined || timeout === null || typeof timeout !== 'number') {
            throw new Error("The 'timeout' property must be a number");
        }
        this.timeout = timeout;
    }

}

export default HttpRequestOptions;