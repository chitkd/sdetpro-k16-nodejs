const readline = require("readline-sync");

function inputUserId() {
    return readline.question('Please input userId: ');
}

function inputPostId() {
    return readline.question('Please input postId: ');
}

module.exports = {
    inputUserId,
    inputPostId
}