// What will be the output of the following code?

const arr = [10, 20, 30]
const fn = num => {
    const n = [...num, ...arr]
    let s = 0
    for (let i = 0; i < n.length; i++) {
        s += n[i]
    }
    return s
}
const result = fn([1, 2, 3, 4])
console.log(result)