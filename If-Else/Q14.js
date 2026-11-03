let day = Number(prompt("Enter day:"));
let month = Number(prompt("Enter month (1-12):"));
let year = Number(prompt("Enter year:"));

let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

if (year > 0 && month >= 1 && month <= 12) {

    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
        daysInMonth[1] = 29;
    }

    if (day >= 1 && day <= daysInMonth[month - 1]) {
        console.log("Valid Date");
    } else {
        console.log("Invalid Date");
    }

} else {
    console.log("Invalid Date");
}