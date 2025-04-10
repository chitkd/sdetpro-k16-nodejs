console.log('1. Dat xe ra khoi nha');
waitForResponse().then(goToTheCoffeeShop);

function goToTheCoffeeShop(){
    console.log('3. Chay toi quan cafe');
}


// Wrap an asynchronous function with a promise
function waitForResponse(){
    return new Promise(wrapper);
}

// resolve: resolve the promise without error
function wrapper(resolve, reject){
    setTimeout(function(){
        console.log('2. An oi uong cafe khong?');
        resolve();
    }, 1 * 1000);
}