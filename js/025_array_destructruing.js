const arr = [10, 20]

// let n1 = arr[0] // 10
// let n2 = arr[1] // 20
// console.log(n1, n2)

const [n1, n2] = arr
console.log(n1, n2)

let x = 10, y = 20;
[y, x] = [x, y]
console.log(x, y)