const {
    apiApp
} = require(`./APIResponseHandler.js`);

const url = 'https://jsonplaceholder.typicode.com/posts';
let allPosts = [];

main();

async function main(){
    await getRawResponse(url);
    apiApp(allPosts);
}

async function getRawResponse(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        allPosts = await response.json();
      } catch (error) {
        console.error(error.message);
      }
}
