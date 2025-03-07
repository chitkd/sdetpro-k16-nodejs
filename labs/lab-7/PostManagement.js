const Post = require('./Post');
const RequestHandler = require('./Requesthandler');
const readline = require("readline-sync");
const url = 'https://jsonplaceholder.typicode.com/posts';
const {
    inputUserId,
    inputPostId
} = require('./InputAPIInformation');

let requestHandler = new RequestHandler();
let userId = inputUserId();
let postId = inputPostId();
main();

async function main() {
   await requestHandler.printAllPosts(userId, url);
    await requestHandler.printTargetPost(userId, postId, url);
}

