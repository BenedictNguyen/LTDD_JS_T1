// 1. Store Mark's and John's mass and height in variables
let markMass = 78;
let markHeight = 1.75;

let johnMass = 92;
let johnHeight = 1.80;

// 2. Calculate both their BMIs using the formula

// Version 1: Directly using the formula
let markBMI = markMass / (markHeight * markHeight);
let johnBMI = johnMass / (johnHeight * johnHeight);

function calculateBMI(mass, height) {
    return mass / (height * height);
}

let markBMIFunc = calculateBMI(markMass, markHeight);
let johnBMIFunc = calculateBMI(johnMass, johnHeight);

// 3. Create a Boolean variable 'markHigherBMI' containing information
// about whether Mark has a higher BMI than John
let markHigherBMI = markBMI > johnBMI;
console.log("Mark's BMI (calculated directly):", markBMI);
console.log("John's BMI (calculated directly):", johnBMI);
console.log("Mark's BMI (calculated using function):", markBMIFunc);
console.log("John's BMI (calculated using function):", johnBMIFunc);
console.log("Does Mark have a higher BMI than John?", markHigherBMI);