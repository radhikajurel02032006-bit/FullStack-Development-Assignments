let ch = prompt("Enter a single character:");

if (ch.length !== 1) {
    console.log("Please enter only one character");
} else if (ch >= 'A' && ch <= 'Z') {
    console.log("Uppercase Letter");
} else if (ch >= 'a' && ch <= 'z') {
    console.log("Lowercase Letter");
} else if (ch >= '0' && ch <= '9') {
    console.log("Digit");
} else {
    console.log("Special Character");
}