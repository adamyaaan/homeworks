// ======= task 1 =========

// function isEven(num) {
//     if (num % 2 === 0){ return true; }
//     return false;
//     // return num % 2 === 0;
// }

// console.log(isEven(-7));


// ======= task 2 =========

// function sumUpTo(num) {
//     let sum = 0;
//     for (let i = 1; i <= num; ++i) {
//         sum += i;
//     }

//     return sum;
// }

// console.log(sumUpTo(10));

// ======= task 3 =========

// function minInArray(arr) {
//     let minElem = arr[0];
//     for (let i = 1; i < arr.length; ++i) {
//         if (arr[i] < minElem) {
//             minElem = arr[i];
//         }
//     }

//     return minElem;
// }

// console.log(minInArray([2, 8, -10, -87]));

// ======= task 4 =========

// function countDigits(num) {
//    if (num < 0) { num = num * (-1); }
//     return num.toString().length;
// }

// console.log(countDigits(-14562));

// return num >= 0 ? String(num).length : String(-num).length;

// function foo(num) {
//     let count = 0;

//     while(num !== 0) {
//         num = (num - (num % 10)) / 10;
//         count++;
//     }

//     return count;
// }

// console.log(foo(-456));

// ======= task 5 =========

// function  sumArray(arr) {
//     let sum = 0;

//     for (let i = 0; i < arr.length; ++i) {
//         sum += arr[i];
//     }

//     for (let num of arr) {
//         sum += num;
//     }

//     return sum;
// }

// console.log(sumArray([2, 5, 7]));

// ======= task 6 =========

// function  average(arr) {
//     let sum = 0;

//     for (let i = 0; i < arr.length; ++i) {
//         sum += arr[i];
//     }

//     return sum / arr.length;
// }

// console.log(average([2, 4, 6]));

// ======= task 7 =========

// function countChar(str, char) {
//     let count = 0;
//     for(let symb of str) {
//         if (symb === char) {
//             count++;
//         }
//     }
    
//     return count;
// }

// console.log(countChar("hello", "p"));

// ======= task 8 =========

// function removeFirstChar(str) {
//     let newString = "";
//     for(let i = 1; i < str.length; ++i) {
//         newString += str[i];
//     }

//     return newString;
// }

// console.log(removeFirstChar("a"));

// ======= task 9 =========

// function power(base, exp) {
//     let mul = 1;
//     for (let i = 0; i < exp; ++i ) {
//         mul *= base;
//     }

//     return mul;
// }
// console.log(power(2, 3));

// console.log(Math.pow(2, 4));

// ======= task 10 =========

// function contains(arr, value) {
//     for (let elem of arr) {
//         if (elem === value) {return true; }
//     }

//     return false;
// }

// console.log(contains([1, 3, 5], 5));

// ======= task 11 =========

// function repeatString(str, n) {
//     let newString = "";
//     for (let i = 0; i < n; ++i) {
//         newString += str;
//     }

//     return newString;
// }

// console.log(repeatString("a", 3));

// ======= task 12 =========

function firstAndLast(arr) {
    return arr.length > 0 ? [arr[0], arr[arr.length - 1]] : [];
}
console.log(firstAndLast([]));
