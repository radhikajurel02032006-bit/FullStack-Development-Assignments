// Reverse an array in place without using a second array.
let arr = [10, 20, 30, 40, 50];

let start = 0;
let end = arr.length - 1;

while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
}

console.log("Reversed Array:", arr);