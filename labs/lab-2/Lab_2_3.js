const readline = require('readline-sync');

let height = readline.question('Your height in m: ');
let weight = readline.question('Your weight in kg: ');

if (height > 0 && weight > 0) {
    let bmi = (weight / (height ** 2)).toFixed(1);

    const MIN_NORMAL_WEIGHT_BMI = 18.5;
    const MAX_NORMAL_WEIGHT_BMI = 24.9;
    const MIN_OVERWEIGHT_BMI = 25;

    let deviation = 0;

    if (bmi < MIN_NORMAL_WEIGHT_BMI) {
        deviation = MIN_NORMAL_WEIGHT_BMI * height ** 2 - weight;
        console.log(`You should increase ${deviation.toFixed(1)} kg`);
    } else if (bmi < MIN_OVERWEIGHT_BMI) {
        console.log("You don't need to increase/decrease weight");
    } else {
        deviation = Math.abs(MAX_NORMAL_WEIGHT_BMI * height ** 2 - weight);
        console.log(`You should decrease ${deviation.toFixed(1)} kg`);
    }
} else if (height <= 0) {
    console.log("Your height should be greater than 0");
    if (weight <= 0) {
        console.log("Your weight should be greater than 0");
    }
} else if (weight <= 0) {
    console.log("Your weight should be greater than 0");
}