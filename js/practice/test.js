const arr = [1, 5, 4, 12, 15]

const sumOfOdd = () => {
    let sum = 0
    for (const item of arr) {
        if (item % 2 !== 0) {
            sum += item
        }
    }
    return sum
}

console.log(sumOfOdd()) // 21

// ***************************************

const largestEven = () => {
    let large = 0
    for (const item of arr) {
        if (item % 2 === 0 && item > large) {
            large = item
        }
    }
    return large
}

console.log(largestEven()) // 12