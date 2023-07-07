const arr = [10, 20, 30, 40]

// higher order function
const x = arr.find(item => item === 20)
const y = arr.findIndex(item => item === 20)
console.log(x)
console.log(y)
// map

// ⚠ ATIIIIIIIIIII important method
// const result = arr.map(item => item * item)
const result = arr.map(item => `<h1>${item}</h1>`)
console.log(result)

const small = arr.filter(item => item > 15)
console.log(small)
