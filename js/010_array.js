let x = [10, "hello"]
//        0    1  
console.log(x)
console.log(x[0])
console.log(x[1])

console.log(x.length)
// change value
x[2] = "DELL"
x[3] = "APPLE"
console.log(x)

// methods

const arr = ["dell", "hp", "apple", "msi"]
// arr.push("msi")
// arr.unshift("msi")
// console.log(arr)
// arr.pop()
// arr.shift()

const result = arr.slice(1, 2)
console.log(result)

console.log(arr)
arr.splice(1, 2)
console.log(arr)