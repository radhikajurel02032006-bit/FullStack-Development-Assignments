let units = Number(prompt("Enter electricity units consumed:"));
let bill = 0;

if (units < 0) {
    console.log("Invalid Units");
} else if (units <= 100) {
    bill = units * 5;
    console.log("Electricity Bill: Rs.", bill);
} else if (units <= 200) {
    bill = (100 * 5) + ((units - 100) * 7);
    console.log("Electricity Bill: Rs.", bill);
} else {
    bill = (100 * 5) + (100 * 7) + ((units - 200) * 10);
    console.log("Electricity Bill: Rs.", bill);
}