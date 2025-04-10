const Post = require('./Post.js');

class RequestHandler {

    constructor(baseUrl) {
        this._baseUrl = baseUrl;
    }


    async getTargetPost(targetUserId, postId) {
        const targetUserPosts = await this._getAllPosts(targetUserId);
        const targetPost = targetUserPosts.find(function (post) {
            return post.id === postId;
        });

        if (!targetPost) {
            //return new Post();
             return undefined;
        }
        const { userId, id, title, body } = targetPost;
        return new Post(userId, id, title, body);
    }

    async getAllPosts(targetUserId) {
        const allPosts = [];
        const targetUserPost = await this._getAllPosts(targetUserId);
        for await (const post of targetUserPost) {
            const {userId, id, title, body} = post;
                let newPost = new Post(userId, id, title, body);
                allPosts.push(newPost);
        }


        return allPosts;
    }

    async _getAllPosts(userId) {
        const postEndpoint = `${this._baseUrl}/posts`;
        const response = await fetch(postEndpoint);
        const allPosts = await response.json();
        return allPosts.filter(function (post) {
            return post.userId === userId;
        });
    }

}

module.exports = RequestHandler;