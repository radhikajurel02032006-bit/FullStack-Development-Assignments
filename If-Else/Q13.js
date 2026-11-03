let a = Number(prompt("Enter coefficient a:"));
let b = Number(prompt("Enter coefficient b:"));
let c = Number(prompt("Enter coefficient c:"));

if (a === 0) {
    console.log("Not a Quadratic Equation");
} else {
    let D = (b * b) - (4 * a * c);

    if (D > 0) {
        console.log("Real and Distinct Roots");
    } else if (D === 0) {
        console.log("Real and Equal Roots");
    } else {
        console.log("Complex Roots");
    }
}