const readline = require('readline-sync');

let height = readline.question('Your height in m: ');
let weight = readline.question('Your weight in kg: ');
if (height > 0 && weight > 0) {
    let bmi = (weight / (height ** 2)).toFixed(1);
    console.log(`Your BMI: ${bmi}`);

    const MIN_NORMAL_WEIGHT_BMI = 18.5;
    const MIN_OVERWEIGHT_BMI = 25;
    const MIN_OBESITY_BMI = 30;

    if (bmi < MIN_NORMAL_WEIGHT_BMI) {
        console.log("\tYou're underweight");
    } else if (bmi < MIN_OVERWEIGHT_BMI) {
        console.log("\tYou're normal weight");
    } else if (bmi < MIN_OBESITY_BMI) {
        console.log("\tYou're overweight");
    } else {
        console.log("You're obesity");
    }
} else if (height <= 0) {
    console.log("Your height should be greater than 0");
    if (weight <= 0) {
        console.log("Your weight should be greater than 0");
    }
} else if (weight <= 0) {
    console.log("Your weight should be greater than 0");
}
