/**
 * 1. Send request -> get response | Asynchronous
 * 2. Process the response | Asynchronous
 * 3. Validate the response | Asynchronous
 */

const url = 'abcdef';

// Callback Hell
sendRequest(url, function (response){
    processResponse(response, function (statusCode) {
        // response: {status: 200}
        validateResponse(statusCode);
        console.log('Done');
        
    });
});

// Minic Asynchronous
function sendRequest(url, callBackFn) {
    console.log(`1. Sending request to the endpoint ${url}...`);
    setTimeout(function () {
        callBackFn({ status: 200 });
    }, 2 * 1000);

}

// Minic Asynchronous
function processResponse(response, callBackFn) {
    console.log('2. Processing the response...');
    setTimeout(function () {
        callBackFn(response.status );
    }, 3 * 1000);
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