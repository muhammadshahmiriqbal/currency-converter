#! /usr/bin/env node 

import inquirer from "inquirer";

const currency : any  = {
    USD : 1, //base currency
    EUR : 0.92,
    SAR : 3.75,
    AED : 3.67,
    INR : 83.30,
    PKR : 277.54
}

let user_answer = await inquirer.prompt(
   [ 
        {
            name : "from",
            message : "Enter From Currency",
            type : "list",
            choices : [ "USD", "EUR", "SAR", "AED", "INR", "PKR" ]
        },

        {
            name : "to",
            message : "Enter To Currency",
            type : "list",
            choices : [ "USD", "EUR", "SAR", "AED", "INR", "PKR" ]
        },

        {
            name : "amount",
            message : "Enter Your Amount",
            type : "number"
        }
   ]
)

let fromAmount = currency[user_answer.from] //exchange rate
let toAmount = currency[user_answer.to]  //exchange rate 
let amount = user_answer.amount;
let baseAmount = amount / fromAmount; // usd base currency
let convertedAmount = baseAmount * toAmount;

console.log(convertedAmount);
