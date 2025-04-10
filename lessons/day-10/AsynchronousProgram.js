console.log('1. Dat xe ra khoi nha');
setTimeout(callBackFunction.bind({age:18}, "An"), 1 * 1000);
console.log('3. Chay toi quan cafe');

function callBackFunction(name) {
    console.log(this.age);
    console.log(`2. ${name} oi uong cafe khong`);
}


