function first(arr, n) {
    if (n === undefined) {
        return arr.length > 0 ? arr[0] : undefined;
    }

    if (n < 0 || arr.length === 0) {
        return [];
    }

    return arr.slice(0, n);
}

// Test cases
console.log(first([7, 9, 0, -2]));        // 7
console.log(first([], 3));                // []
console.log(first([7, 9, 0, -2], 3));     // [7, 9, 0]
console.log(first([7, 9, 0, -2], 6));     // [7, 9, 0, -2]
console.log(first([7, 9, 0, -2], -3));    // []