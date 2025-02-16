const readline = require("readline-sync");

function apiApp(allPosts) {
    let isContinuing = true;
    while (isContinuing) {
        let userId = inputUserId();
        let postId = inputPostId();
        printMenu();
        let option = getUserOption();
        switch (option) {
            case 1:
                getPostContent(allPosts, userId, postId);
                break;
            case 2:
                getAllPostForUser(allPosts, userId);
                break;
            case 0:
                isContinuing = false;
                break;
        }
    }
    console.log("See you again!");
}

function getAllPostForUser(allPosts, userId) {
    let posts = allPosts.filter(function (post) {
        return post.userId === Number(userId);
    });
    if (posts.length > 0) {
        console.log(`All posts for that user:`);
        console.log(posts);
    } else {
        console.log('Post not found!');
    }
}

function getPostContent(allPosts, userId, postId) {
    let post = allPosts.find(function (post) {
        return post.userId === Number(userId) && post.id === Number(postId);
    });
    if (post) {
        console.log(`The post content is found as below:`);
        console.log(post);
    } else {
        console.log('Post not found!');
    }
}



function inputUserId() {
    return readline.question('Please input userId: ');
}

function inputPostId() {
    return readline.question('Please input postId: ');
}

function getUserOption() {
    return Number(readline.question('Please enter your option: '))
}
function printMenu() {
    console.log(`
        ==============MENU==============
        1. Get post contents
        2. Print all related posts
        0. Exit
        `);
}

module.exports = {
    apiApp
}