let a = Number(prompt("Enter first side:"));
let b = Number(prompt("Enter second side:"));
let c = Number(prompt("Enter third side:"));

if (a <= 0 || b <= 0 || c <= 0) {
    console.log("Invalid Triangle");
} else if (a + b <= c || a + c <= b || b + c <= a) {
    console.log("Invalid Triangle");
} else if (a === b && b === c) {
    console.log("Equilateral Triangle");
} else if (a === b || b === c || a === c) {
    console.log("Isosceles Triangle");
} else {
    console.log("Scalene Triangle");
}