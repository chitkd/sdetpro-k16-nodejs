console.log('1. Dat xe ra khoi nha');
setTimeout(callBackFunction.bind({age:18}, "Khoi dong xe"), 2000);
console.log('3. Chay toi quan cafe');

function callBackFunction(name) {
    console.log(this.age);
    
    console.log(`2. ${name}`);
}
