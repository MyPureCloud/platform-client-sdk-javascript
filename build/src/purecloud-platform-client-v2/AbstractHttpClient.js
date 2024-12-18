class AbstractHttpClient {

    constructor() {
        this.timeout = 16000;
    }

    setTimeout(timeout) {
        if (timeout === null || timeout === undefined || typeof timeout !== 'number') {
            throw new Error("The 'timeout' property must be a number");
        }
        this.timeout = timeout;
    }

    setHttpsAgent(httpsAgent) {
        if (httpsAgent && typeof httpsAgent !== 'object') {
            throw new Error("The 'httpsAgent' property must be an object");
        }
        this.httpsAgent = httpsAgent;
    }

    request(httpRequestOptions) {
        throw new Error("method must be implemented");
    }
}

export default AbstractHttpClient;