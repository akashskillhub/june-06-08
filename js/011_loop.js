const isPrime = num => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true

}

const display = limit => {
    const prime = []
    for (let i = 2; prime.length !== limit; i++) {
        if (isPrime(i)) {
            prime.push(i)
        }
    }
    return prime
}

console.log(display(10))
// test([22,1,4,5,3,4]) // return all prime numbers
// demo(50,100) // return all prime numner between 50 and 100

// [2,3,5,7,11,13,17,19,23,29]    
