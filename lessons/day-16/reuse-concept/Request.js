// Parent class / Super class / Base class
class Request {
    // Class variable
    static id = 1;
    constructor(url, headers = {}) {
        this.url = url;
        this.headers = headers;
        this.method = '';
    }

    setMethod(method) {
        this.headers = { ...this.headers, method: method };
    }

    sendRequest() {
        console.log(`Sending request with the headers: ${JSON.stringify(this.headers)}`);

    }

    verifyResponse() {
        console.log('Verifying response...');

    }

    static doSomething() {
        console.log('This is a class method');
    }
}

module.exports = Request;