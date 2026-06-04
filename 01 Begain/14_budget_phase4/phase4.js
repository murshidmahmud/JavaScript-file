const user = "Murshid Mahmud";
const income = 50000;


//multiple expenses:
let rent = 1200;
let groceries = 300;
let transport = 300;
let entertainment = 500;

//Total expenses:
let expenses = rent + groceries + transport + entertainment;

// Tax:
let tax = income * 0.1;

//Net income:
let net_income = income-tax;

//balance:
let remaining_balance = net_income-expenses;

//savings:
let savings = remaining_balance * 0.2;


//output:

console.log("⏩Personal Budget Tracker App");
console.log("User: ", user);
console.log("💰Total income: $", income);
console.log("Total expenses: $", expenses);
console.log("Tax Deducted: $" + tax);
console.log("Net income: $", net_income);
console.log("Remaining balance: $",remaining_balance);
console.log("savings: $", savings);