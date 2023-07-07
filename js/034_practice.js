const x = [100, 200]
const [y] = [100, 200]
const obj = { name: "john", city: "london" }
const { name } = obj

console.log(x)
console.log(y)

const fn = arg => [arg, 200]
const demo = () => "hello"

const [res, z] = fn(demo)
console.log(res)
