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

// Brute force [ O(2^(n+m)) ]
// const gridTraveler = (m, n) => {
//     if (m === 1 && n === 1) return 1;
//     if (m === 0 || n === 0) return 0;
//     return gridTraveler(m - 1, n) + gridTraveler(m, n - 1)
// }

// Memoization
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