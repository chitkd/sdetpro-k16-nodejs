const todo1Endpoint = 'https://jsonplaceholder.typicode.com/todos/1';
fetch(todo1Endpoint)
    .then(getResponse)
    .then(function (todo) {
        console.log(todo);
        if (todo.completed) {
            console.log('Task Completed');
        } else {
            console.log('Task is in progress!');
        }
        console.log('DONE testing');
        console.log('Next step');
        console.log('Final step');
    })


// Details implememtation
function getResponse(rawResponse) {
    return rawResponse.json();
}

function validateResponse(todo) {
    console.log(todo);
    if (todo.completed) {
        console.log('Task Completed');
    } else {
        console.log('Task is in progress!');
    }
}


