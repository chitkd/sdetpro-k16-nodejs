```js
userId = 1;
postId = 1;

// Functional programming
const requestHandler = new RequestHandler(BASE_URL);
const post = await postHandler.printTargetPost(userId, postId);
const allPosts = await postHandler.printAllPost(userId);

```

1. Call login request then get response and process to get the token out
2. Call another request this header neeeds the token
=> Need to handle async to sync
