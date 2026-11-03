// Search for a given element in an array and print its index (linear search).
let arr = [10, 20, 30, 40, 50];

let target = 30;
let found = false;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
        console.log("Element found at index:", i);
        found = true;
        break;
    }
}

if (!found) {
    console.log("Element not found");
}