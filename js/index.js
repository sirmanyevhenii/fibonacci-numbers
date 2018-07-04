
// loop

// const num = parseInt(prompt('Enter Fibonacci number'));
// console.time('Function #1');
// const num = 1000;
// const solution = fibonacciLoop(num);

// function fibonacciLoop(num) {
//     if (num == 0) {
//         return 0;
//     }
//     let fibPrevPrev = 0, fibPrev = 1, fibNext = 1;
//     for (let i = 2; i <= num; i++) {
//         fibNext = fibPrevPrev + fibPrev;
//         fibPrevPrev = fibPrev;
//         fibPrev = fibNext;
//     }
//     return fibNext;
// }

// console.log(solution);
// console.timeEnd('Function #1')



// arr

// const num = parseInt(prompt('Enter Fibonacci number'));
// console.time('Function #2');
// const num = 1000;
// const solution = fibonacciArr(num);

// function fibonacciArr(num) {
//     let fibArr = [1, 1];
//     for (let i = 2; i <= num; i++) {
//         fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]);
//     }
//     return fibArr[num -1];
// }

// console.log(solution);
// console.timeEnd('Function #2')



// recursion

const num = parseInt(prompt('Enter Fibonacci number'));
const solution = fibonacciRec(num);

function fibonacciRec(num) {
    if (num < 1) {
        return 0;
    } else if (num <= 2) {
        return 1;
    }
    return fibonacciRec(num - 1) + fibonacciRec(num - 2);
}

console.log(solution);