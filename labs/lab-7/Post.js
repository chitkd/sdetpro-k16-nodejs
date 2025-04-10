class Post {
    constructor(userId, postID, title, body) {
        this._userId = userId;
        this._postID = postID;
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
        return this._postID;
    }

    set id(id) {
        this._postID = postID;
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
}

module.exports = Post;