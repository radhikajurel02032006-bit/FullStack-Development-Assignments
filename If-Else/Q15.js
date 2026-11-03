let income = Number(prompt("Enter your annual income:"));
let tax = 0;

if (income < 0) {
    console.log("Invalid Income");
} else if (income <= 300000) {
    tax = 0;
} else if (income <= 600000) {
    tax = (income - 300000) * 0.05;
} else if (income <= 900000) {
    tax = (300000 * 0.05) + (income - 600000) * 0.10;
} else if (income <= 1200000) {
    tax = (300000 * 0.05) + (300000 * 0.10) + (income - 900000) * 0.15;
} else {
    tax = (300000 * 0.05) + (300000 * 0.10) + (300000 * 0.15) + (income - 1200000) * 0.20;
}

if (income >= 0) {
    console.log("Annual Income: Rs.", income);
    console.log("Total Tax: Rs.", tax);
}