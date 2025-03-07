class Post {
    constructor(userId, postID, title, body) {
        this._userId = userId;
        this._postId = postId;
        this._title = title;
        this._body = body;
    }

    get userId() {
        return this._userId;
    }

    set userId(userId) {
        this._userId = userId;
    }

    get id() {
        return this._postId;
    }

    set id(id) {
        this._postId = postId;
    }

    get title() {
        return this._title;
    }

    set title(title) {
        this._title = title;
    }

    get body() {
        return this._body;
    }

    set body(body) {
        this._body = body;
    }
    printPostContent() {
        return console.log(
            `userId: ${this._userId}\n` +
            `\tid: ${this._postId}\n` +
            `\ttitle: ${this._title}\n` +
            `\tbody: ${this._body}\n`);
    }
}

module.exports = Post;