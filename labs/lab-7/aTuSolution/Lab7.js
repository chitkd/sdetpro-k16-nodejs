const RequestHandler = require('./RequestHandler.js');
const Post = require('./Post.js');

let userID = 300;
let postID = 40;
const BASE_URL = 'https://jsonplaceholder.typicode.com';
main();

// Init Controller
async function main() {
    const requestHandler = new RequestHandler(BASE_URL);
    const post = await requestHandler.getTargetPost(userID, postID);
    const allPosts = await requestHandler.getAllPosts(userID);

    // Print target Post content
    if (!post) {
        console.log(`The post with id=${postID} does not exist for the user with id=${userID}`);
    } else {
        post.printPostContent();
    }

    // Print all posts content
    if (allPosts.length === 0) {
        console.log(`There is no post for the user with id: ${userID}`);
    }
    else {
        console.log('All posts content:');
        for (const post of allPosts) {
            post.printPostContent();
        }
    }
}
