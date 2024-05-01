#! /usr/bin/env node
// inquirer install
import inquirer from 'inquirer';
//currency conversion object
let currencyConversion = {
    "PKR": {
        "USD": 0.0036,
        "GBP": 0.0029,
        "PKR": 1,
    },
    "GBP": {
        "USD": 1.25,
        "GBP": 1,
        "PKR": 349.33,
    },
    "USD": {
        "USD": 1,
        "GBP": 0.80,
        "PKR": 278.36,
    },
};
//Prompt user for input
const answer = await inquirer.prompt([{
        type: "list",
        name: "from",
        message: "Please select your currency?",
        choices: ["PKR", "GBP", "USD"],
    },
    {
        type: "list",
        name: "to",
        message: "Please select your conversion rate?",
        choices: ["PKR", "GBP", "USD"],
    },
    {
        type: "number",
        name: "amount",
        message: "Please enter the amount you to convert?",
    }
]);
//Destructuring USer Input
const { from, to, amount } = answer;
// Perform currency conversion
if (from && to && amount) {
    let result = currencyConversion[from][to] * amount;
    console.log(`your conversion from ${from} to ${to} is ${result}`);
}
else {
    console.log("invalid conversion");
}
