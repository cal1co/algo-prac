console.log('FIB ====================');


// Brute Force [ O(2^n) ]
// const fib = (n) => {
//     if (n <= 2) return 1;
//     return fib(n - 1) + fib(n - 2)
// }

// Memoization
//  JS object, keys will be arg to fn, value will be the reuturn value
// const fib = (n, memo = {}) => {
//     if (n in memo) return memo[n];
//     if (n <= 2) return 1;
//     memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
//     return memo[n];
// }

// Tabulation
const fib = (n) => {
    const table = Array(n + 1).fill(0);
    table[1] = 1;
    for (let i = 0; i <= n; i++){
        table[i + 1] += table[i]
        table[i + 2] += table[i]
    }
    return table[n]
}
// console.log(fib(90))


console.log('GRID TRAVELER =======================');

// Brute force [ O(2^(n + m)) ]
// const gridTraveler = (m, n) => {
//     if (m === 1 && n === 1) return 1;
//     if (m === 0 || n === 0) return 0;
//     return gridTraveler(m - 1, n) + gridTraveler(m, n - 1)
// }

// Memoization [ O(n * m) ]
// const gridTraveler = (m, n, memo = {}) => {
//     // are the args in the memo
//     const key = m + ',' + n;
//     if (key in memo) return memo[key];
//     if (m === 1 && n === 1) return 1;
//     if (m === 0 || n === 0) return 0;
//     memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo)
//     return memo[key]
// }

// Tabulation
const gridTraveler = (m, n) => {
    const table = Array(m + 1)
        .fill()
        .map(() => Array(n + 1).fill(0))

    table[1][1] = 1;
    
    for (let i = 0; i <= m; i++){
        for (let j = 0; j <= n; j++){
            const current = table[i][j]; 
            if (j + 1 <= n) table[i][j + 1] += current;
            if (i + 1 <= m) table[i + 1][j] += current;
        }
    }
    return table[m][n]
}
// console.log(gridTraveler(18, 18))


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
// const canSum = (targetSum, numbers, memo = {}) => {
//     if (targetSum in memo) return memo[targetSum];
//     if (targetSum === 0) return true;
//     if (targetSum < 0) return false;

//     for (let num of numbers){
//         // console.log(num);
//         const remainder = targetSum - num;
//         if (canSum(remainder, numbers, memo) === true){
//             memo[targetSum] = true;
//             return true;
//         } 
//     }
//     memo[targetSum] = false;
//     return false;
// }

// Tabulation
const canSum = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(false);
    table[0] = true
    for (let i = 0; i <= targetSum; i++){
        if (table[i] === true){
            numbers.forEach(num => {
                table[i + num] = true;
            })
        }
    }
    return table[targetSum]
}
console.log(canSum(7, [2, 3])) // true
console.log(canSum(300, [7, 14])) // false


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
// console.log(howSum(7, [5, 3, 4, 7]));
// console.log(howSum(300, [7, 14]));


console.log('BEST SUM =======================');

// Brute Force [ O(n^m * m) ]
// const bestSum = (targetSum, numbers) => {
//     if (targetSum === 0) return [];
//     if (targetSum < 0) return null;

//     let shortestCombination = null

//     for (let num of numbers){
//         const remainder = targetSum - num;
//         const remainderCombination = bestSum(remainder, numbers);
//         if (remainderCombination !== null){
//             const combination = [ ...remainderCombination, num ]
//             // if the combination is shorter than the current "shortest", update it
//             if (shortestCombination === null || combination.length < shortestCombination.length){
//                 shortestCombination = combination;
//             }
//         }
//     }
//     return shortestCombination
// };

// Memoized [ O(m^2 * 2)]
const bestSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let shortestCombination = null

    for (let num of numbers){
        const remainder = targetSum - num;
        const remainderCombination = bestSum(remainder, numbers, memo);
        if (remainderCombination !== null){
            const combination = [ ...remainderCombination, num ]
            // if the combination is shorter than the current "shortest", update it
            if (shortestCombination === null || combination.length < shortestCombination.length){
                shortestCombination = combination;
            }
        }
    }
    memo[targetSum] = shortestCombination
    return shortestCombination
};
// console.log(bestSum(7, [5, 3, 4, 7]));
// console.log(bestSum(100, [1, 2, 5, 25]));



console.log('CAN CONSTRUCT =======================');

// Brute Force [ O(n^m) ]
// const canConstruct = (target, wordBank) => {
//     if (target === ''){
//         return true;
//     }
//     for (let word of wordBank){
//         if (target.indexOf(word) === 0){
//             const suffix = target.slice(word.length);
    
//             if (canConstruct(suffix, wordBank) === true){
//                 return true
//             }
//         }
//     }
// }

// Memoized [ O(n * m^2) ]
const canConstruct = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target];
    if (target === ''){
        return true;
    }
    for (let word of wordBank){
        if (target.indexOf(word) === 0){
            const suffix = target.slice(word.length);
    
            if (canConstruct(suffix, wordBank, memo) === true){
                memo[target] = true;
                return true
            }
        }
    }
    memo[target] = false
    return false;
}

console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee','eeeee','eeeeee']))



console.log('COUNT CONSTRUCT =======================');

// Brute Force [ O(n^m * m) ]
// const countConstruct = (target, wordBank) => {
//     if (target === '') return 1;

//     let totalCount = 0;

//     for (let word of wordBank){
//         if (target.indexOf(word) === 0){
//             const numWaysForRest = countConstruct(target.slice(word.length), wordBank);
//             totalCount += numWaysForRest
//         }
//     }
//     return totalCount; 
// }

// Memoized [ O(n * m^2) ]
const countConstruct = (target, wordBank, memo = {}) => {
    if (target in memo) memo[target];
    if (target === '') return 1;

    let totalCount = 0;

    for (let word of wordBank){
        if (target.indexOf(word) === 0){
            const numWaysForRest = countConstruct(target.slice(word.length), wordBank, memo);
            totalCount += numWaysForRest
        }
    }
    memo[target] = totalCount
    return totalCount
}

// console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']))
// console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeef", ["e", "ee","eee",'eeee', "eeeee", "eeeeee"]));


console.log('ALL CONSTRUCT =======================');

// Brute Force
// const allConstruct = (target, wordBank) => {
//     if (target === '') return [[]];

//     const result = [];

//     for (let word of wordBank){
//         if (target.indexOf(word) === 0){
//             const suffix = target.slice(word.length);
//             const suffixWays = allConstruct(suffix, wordBank);
//             const targetWays = suffixWays.map(way => [ word, ...way ])
//             result.push(...targetWays)
//         }
//     }
//     return result
// }

// ALL CONSTRUCT: O(n^m)
const allConstruct = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target]
    if (target === '') return [[]];

    const result = [];

    for (let word of wordBank){
        if (target.indexOf(word) === 0){
            const suffix = target.slice(word.length);
            const suffixWays = allConstruct(suffix, wordBank, memo);
            const targetWays = suffixWays.map(way => [ word, ...way ])
            result.push(...targetWays)
        }
    }
    memo[target] = result;
    return result
}
// console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']))
// console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'efg']))
// console.log(allConstruct("eeeeeeeeeeeeeeeeeeeeeef", ["e", "ee","eee",'eeee', "eeeee", "eeeeee"]));
// console.log(allConstruct('hello', ['cat', 'dog', 'mouse']))
// console.log(allConstruct('', ['cat', 'dog', 'mouse']))
