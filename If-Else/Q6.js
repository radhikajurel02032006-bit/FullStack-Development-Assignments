let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));
let num3 = Number(prompt("Enter third number:"));

if (num1 >= num2 && num1 >= num3) {
    console.log(num1 + " is the largest");
} else if (num2 >= num1 && num2 >= num3) {
    console.log(num2 + " is the largest");
} else {
    console.log(num3 + " is the largest");
}