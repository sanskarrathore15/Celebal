// 1. Join array elements into a string
const myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString()); // "Red,Green,White,Black"
console.log(myColor.join(",")); // "Red,Green,White,Black"
console.log(myColor.join("+")); // "Red+Green+White+Black"

// 2. Count frequency of elements in array
const arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
const tallyElements = arr => {
    const counts = arr.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1;
        return acc;
    }, {});
    return Object.entries(counts).map(([k, v]) => `${k} (${v} times)`);
};
console.log(tallyElements(arr1).find(s => s.includes('a')));

// 3. Truncate string
const cutString = (str, len) => str.substr(0, len);
console.log(cutString("Robin Singh", 4));

// 4. Capitalize words
const toTitleCase = str =>
    str.split(' ').map(w => w[0].toUpperCase() + w.slice(1)).join(' ');
console.log(toTitleCase('js string exercises'));

// 5. Array between
const numbersInRange = (lower, upper, arr) =>
    arr.filter(n => n >= lower && n <= upper);
console.log(numbersInRange(3, 8, [1, 5, 95, 0, 4, 7])); // [5, 4, 7]
console.log(numbersInRange(1, 10, [1, 10, 25, 8, 11, 6])); // [8, 6]
console.log(numbersInRange(7, 32, [1, 2, 3, 78])); // []

// 6. Find index
const getIndex = (arr, target) => arr.indexOf(target);
console.log(getIndex(["hi", "edabit", "fgh", "abc"], "fgh")); // 2
console.log(getIndex(["Red", "blue", "Blue", "Green"], "blue")); // 1
console.log(getIndex(["a", "g", "y", "d"], "d")); // 3
console.log(getIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple")); // 0