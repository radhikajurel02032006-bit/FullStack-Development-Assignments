// Copy the elements of one array into another array.
let arr1 = [10, 20, 30, 40, 50];

let arr2 = [];

for (let i = 0; i < arr1.length; i++) {
    arr2[i] = arr1[i];
}

console.log("Original Array:", arr1);
console.log("Copied Array:", arr2);