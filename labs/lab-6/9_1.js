const {
    apiApp
} = require(`/Volumes/Work-Study/SOURCE_CODE/sdetpro-k16-nodejs/labs/lab-6/util/APIResponseHandler.js`);

const url = 'https://jsonplaceholder.typicode.com/posts';

fetch(url)
.then(function (rawResponse) {
    return rawResponse.json();
})
.then(function (data) {
    apiApp(data)
})


