const obj = { brand: "dell" }
// const x = obj  // Not a Copy
const x = { ...obj } // shalow copy
x.brand = "apple"

console.log(obj)
