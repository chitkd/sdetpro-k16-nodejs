/**
 * 1. Send request -> get response | Asynchronous
 * 2. Process the response | Asynchronous
 * 3. Validate the response | Asynchronous
 */

const url = 'abcdef';
main();


async function main(){
    const response = await sendRequest(url);
    const statusCode = await processResponse(response);
    validateResponse(statusCode);
    console.log('DONE!');
}
// Minic Asynchronous
function sendRequest(url) {
    console.log(`1. Sending request to the endpoint ${url}...`);
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve({ status: 100 });
        }, 2 * 1000);
    });
}

// Minic Asynchronous
function processResponse(response) {
    console.log('2. Processing the response...');
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(response.status);
        }, 3 * 1000);
    });
}

// Minic Asynchronous
function validateResponse(responseStatus) {
    console.log('3. Validating the response...');
    if (responseStatus === 200) {
        console.log('PASSED!');
    } else {
        console.log('FAILED!');
    }
}