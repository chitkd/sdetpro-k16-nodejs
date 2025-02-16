const {
    apiApp
} = require(`/Volumes/Work-Study/SOURCE_CODE/sdetpro-k16-nodejs/labs/lab-6/util/APIResponseHandler.js`);
const url = 'https://jsonplaceholder.typicode.com/posts';

fetch(`${url}`)
.then(function (rawResponse) {
    return getRawResponse(rawResponse);
})
.then(function (data) {
    apiApp(data)
})

function getRawResponse(rawResponse) {
    console.log('Get the raw response...');
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(rawResponse.json());
        }, 1 * 1000);
    })
}

