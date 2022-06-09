console.log('FIB ===========================');


// Brute Force [ O(2^n) ]
// const fib = (n) => {
//     if (n <= 2) return 1;
//     return fib(n - 1) + fib(n - 2)
// }

// Memoization
//  JS object, keys will be arg to fn, value will be the reuturn value
const fib = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
}
console.log(fib(800))



console.log('GRID TRAVELER ==================');

// Brute force [ O(2^(n + m)) ]
// const gridTraveler = (m, n) => {
//     if (m === 1 && n === 1) return 1;
//     if (m === 0 || n === 0) return 0;
//     return gridTraveler(m - 1, n) + gridTraveler(m, n - 1)
// }

// Memoization [ O(n * m)]
const gridTraveler = (m, n, memo = {}) => {
    // are the args in the memo
    const key = m + ',' + n;
    if (key in memo) return memo[key];
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;
    memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo)
    return memo[key]
}

console.log(gridTraveler(18, 18))


console.log('CAN SUM =======================');

// Brute force [ O(n^m) ]
// const canSum = (targetSum, numbers) => {
//     if (targetSum === 0) return true;
//     if (targetSum < 0) return false;

//     for (let num of numbers){
//         // console.log(num);
//         const remainder = targetSum - num;
//         if (canSum(remainder, numbers) === true){
//             return true;
//         } 
//     }

//     return false;
// }

// Memoization [ O(m*n) ]
const canSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;

    for (let num of numbers){
        // console.log(num);
        const remainder = targetSum - num;
        if (canSum(remainder, numbers, memo) === true){
            memo[targetSum] = true;
            return true;
        } 
    }
    memo[targetSum] = false;
    return false;
}

console.log(canSum(300, [7, 14]))


console.log('HOW SUM =======================');

// Brute Force [ O(n^m * m) ]
// const howSum = (targetSum, numbers) => {
//     if (targetSum === 0) return [];
//     if (targetSum < 0) return null;
    
//     for (let num of numbers){
//         const remainder = targetSum - num;
//         const remainderResult = howSum(remainder, numbers)
//         if (remainderResult !== null){
//             return [...remainderResult, num];
//         }
//     }
//     return null
// }

// Memoized [ O(n*m^2) ]
const howSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;
    
    for (let num of numbers){
        const remainder = targetSum - num;
        const remainderResult = howSum(remainder, numbers, memo)
        if (remainderResult !== null){
            memo[targetSum] = [...remainderResult, num];
            return memo[targetSum];
        }
    }
    memo[targetSum] = null
    return null
}

console.log(howSum(7, [5, 3, 4, 7]));
console.log(howSum(300, [7, 14]));