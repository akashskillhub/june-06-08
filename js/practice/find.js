const arr = ["dell", "hp", "apple"]

const find = arg => {
    for (const item of arr) {
        if (arg === item) {
            return true
        }
    }
    return false
}

console.log(find("msi"))  // false
console.log(find("dell")); // true



const findIndex = arg => {
    for (let i = 0; i < arr.length; i++) {
        if (arg === arr[i]) {
            return i
        }
    }
    return -1
}

console.log(findIndex("msi"))  // -1
console.log(findIndex("apple")); // 2
console.log(findIndex("dell")); // 0

const num = [10, 20, 30, 40, 200, 5, 3]

const filter = (n, op) => {
    const result = []
    for (const item of num) {
        if (op === "gt" && item > n) {
            result.push(item)
        }
        if (op === "lt" && item < n) {
            result.push(item)
        }
    }
    return result


}
console.log(filter(15, "gt")) // [20,30,40]
console.log(filter(15, "lt")) // [10]
