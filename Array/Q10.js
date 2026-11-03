// Check whether an array is sorted in ascending order.
let arr = [10, 20, 30, 40, 50];

let isSorted = true;

for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
        isSorted = false;
        break;
    }
}

if (isSorted) {
    console.log("Array is sorted in ascending order");
} else {
    console.log("Array is not sorted in ascending order");
}