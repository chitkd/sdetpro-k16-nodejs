const readline = require('readline-sync');

let height = readline.question('Your height in m: ');
let weight = readline.question('Your weight in kg: ');
let bmi = (weight / (height ** 2)).toFixed(1);

const MIN_NORMAL_WEIGHT_BMI = 18.5;
const MIN_OVERWEIGHT_BMI = 25;
const MIN_OBESITY_BMI = 30;


if (bmi < MIN_NORMAL_WEIGHT_BMI) {
    console.log("You're underweight");
} else if (bmi < MIN_OVERWEIGHT_BMI) {
    console.log("You're normal weight");
} else if (bmi < MIN_OBESITY_BMI) {
    console.log("You're overweight");
} else {
    console.log("You're obesity");
}