// Function to calculate tip and total value
function calculateTip(bill) {
    // 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
    // this. It's not allowed to use an if/else statement (If it's easier for you, you can
    // start with an if/else statement, and then try to convert it to a ternary
    // operator!)

    let tip = (bill >= 50 && bill <= 300) ? (bill * 0.15) : (bill * 0.20);
    let totalValue = bill + tip;

    // 2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip).
    console.log(`The bill was ${bill.toFixed(2)}, the tip was ${tip.toFixed(2)}, and the total value ${totalValue.toFixed(2)}`);
}
let billAmount = 300;
calculateTip(billAmount);