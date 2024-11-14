function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i]; // The element to insert
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key; // Insert the key at the correct position
    }
    return arr;
}

// Example usage:
let array = [12, 11, 13, 5, 6];
console.log("Sorted Array:", insertionSort(array));
