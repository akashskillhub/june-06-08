const arr = [
    { price: 100, qty: 2 },
    { price: 50, qty: 1 },
]
// let sum = 0
// for (const item of arr) {
//     sum += item
// }
// console.log(sum)

const result = arr.reduce((total, item) => total + (item.price * item.qty), 0)
console.log(result)