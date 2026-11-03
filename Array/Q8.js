// Find the second largest element in an array.
let arr = [10, 50, 30, 80, 40, 60];

let largest = -Infinity;
let secondLargest = -Infinity;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
        secondLargest = arr[i];
    }
}

if (secondLargest === -Infinity) {
    console.log("Second largest element does not exist");
} else {
    console.log("Second largest element:", secondLargest);
}