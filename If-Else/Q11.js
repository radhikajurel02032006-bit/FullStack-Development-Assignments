let num1 = Number(prompt("Enter first number:"));
let operator = prompt("Enter operator (+, -, *, /):");
let num2 = Number(prompt("Enter second number:"));

if (operator === "+") {
    console.log("Result:", num1 + num2);
} else if (operator === "-") {
    console.log("Result:", num1 - num2);
} else if (operator === "*") {
    console.log("Result:", num1 * num2);
} else if (operator === "/") {
    if (num2 === 0) {
        console.log("Cannot divide by zero");
    } else {
        console.log("Result:", num1 / num2);
    }
} else {
    console.log("Invalid Operator");
}