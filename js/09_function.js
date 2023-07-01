function test(i, j) {   // i  argument
    return i * j
}
function demo(i, j) {   // i  argument
    return i
}

// let p = demo(10)
// let q = demo(2)
// const x = test(p, q)
const x = test(demo(10), demo(2))
console.log(x)