const Post = require('./Post');
class RequestHandler {
    // *****Should define the RequestHandler class with methods printTargetPost and printAllPosts only
    async getRawResponse(url) {
        let rawResponse;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            rawResponse = await response.json();
        } catch (error) {
            console.error(error.message);
        }
        return rawResponse;
    }
    
    async getAllPosts(userId, url) {    
        let allPosts = JSON.stringify(await this.getRawResponse(url));
        
        return  JSON.parse(allPosts).filter(function (post) {
            return post.userId === Number(userId);
        });
    }

    async printTargetPost(userId, postId, url) {
        // Construct the returned data as a Post data model from class Post
        let foundPost = await this.getPostContent(userId, postId, url);

        if (foundPost) {
            foundPost = JSON.parse(JSON.stringify(foundPost));
            let newPost = new Post(foundPost.userId, foundPost.id, foundPost.title, foundPost.body);
            console.log(`The post for userID = ${userId} & postID = ${postId}\n`, newPost);
        } else {
            console.log('No content post found!');
        }

    }

    async getPostContent(userId, postId, url) {    
        let allPosts = JSON.stringify(await this.getRawResponse(url));
        
        return  (JSON.parse(allPosts)).find(function (post) {
            return post.userId === Number(userId) && post.id === Number(postId);
        });
    }


    async printAllPosts(userId, url) {
        // Construct the returned data as a [ Post data model ] from class Post
        let allPosts = await this.getAllPosts(userId, url);
        let postList = [];
        
        for await (const post of allPosts) {
            const {userId, id, title, body} = post;
                let newPost = new Post(userId, id, title, body);
                postList.push(newPost);
        }

        if (postList.length > 0) {
            console.log(`All posts for userID = ${userId}`, postList);
        } else {
            console.log('No post found!');
        }
    }

}
module.exports = RequestHandler;