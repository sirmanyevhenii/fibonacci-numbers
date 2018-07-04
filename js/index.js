const num = parseInt(prompt('Enter Fibonacci number'));

// loop
const solutionLoop = fibonacciLoop(num);

function fibonacciLoop(num) {
    if (num == 0) {
        return 0;
    }
    let fibPrevPrev = 0, fibPrev = 1, fibNext = 1;
    for (let i = 2; i <= num; i++) {
        fibNext = fibPrevPrev + fibPrev;
        fibPrevPrev = fibPrev;
        fibPrev = fibNext;
    }
    return fibNext;
}


// arr
const solutionArr = fibonacciArr(num);

function fibonacciArr(num) {
    let fibArr = [1, 1];
    for (let i = 2; i <= num; i++) {
        fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]);
    }
    return fibArr[num - 1];
}


// recursion
const solutionRec = fibonacciRec(num);

function fibonacciRec(num) {
    if (num < 1) {
        return 0;
    } else if (num <= 2) {
        return 1;
    }
    return fibonacciRec(num - 1) + fibonacciRec(num - 2);
}

console.log('solutionLoop =', solutionLoop);
console.log('solutionArr =', solutionArr);
console.log('solutionRec =', solutionRec);