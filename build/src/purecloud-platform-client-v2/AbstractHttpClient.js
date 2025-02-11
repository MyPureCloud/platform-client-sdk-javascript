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

    enableHooks() {
        throw new Error("method must be implemented");
    }

    /**
     * Set a PreHook function that modifies the request config before execution.
     * @param {(config: object) => object | Promise<object> | void} hookFunction
     */
    setPreHook(hookFunction) {
        if (typeof hookFunction !== "function" || hookFunction.length !== 1) {
            throw new Error("preHook must be a function that accepts (config)");
        }
        this.preHook = hookFunction;
        this.enableHooks()
    }

    /**
     * Set a PostHook function that processes the response or error after execution.
     * @param {(response: object | null, error: Error | null) => object | Promise<object> | void} hookFunction
     */
    setPostHook(hookFunction) {
        if (typeof hookFunction !== "function" || hookFunction.length !== 1) {
            throw new Error("postHook must be a function that accepts (response)");
        }
        this.postHook = hookFunction;
        this.enableHooks()
    }

}

export default AbstractHttpClient;