const {
    apiApp
} = require(`./APIResponseHandler.js`);

const url = 'https://jsonplaceholder.typicode.com/posts';

fetch(url)
.then(function (rawResponse) {
    return rawResponse.json();
})
.then(function (data) {
    apiApp(data)
})

