// const sum = (n1, n2, n3) => n1 + n2 + n3
// const result = sum(10, 20, 30)
// console.log(result) // expected 60
// const res = sum(10, 20)
// console.log(res)

// Rest Oprator
const sum = (...arg) => {
    let s = 0
    for (let i = 0; i < arg.length; i++) {
        s += arg[i]
    }
    console.log(s)
}
sum(10, 20, 50, 60)

const arr = ["dell", "hp"]
// const x = arr // not copy
const x = [...arr]  // shalow copy
x[0] = "apple"

console.log(x)
console.log(arr)
// console.log(...arr)



