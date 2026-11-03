// Read N numbers into an array and print them.

let n = Number(prompt("Enter the number of elements:"));

let arr = [];

for (let i = 0; i < n; i++) {
    let num = Number(prompt("Enter number:"));
    arr.push(num);
}

console.log("Array elements:", arr);