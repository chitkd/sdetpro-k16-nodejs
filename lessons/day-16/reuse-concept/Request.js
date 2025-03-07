// Parent class / Super class / Base class
class Request {
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
}

module.exports = Request;