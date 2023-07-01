const arr = ["dell", "hp"]

console.log(arr)
arr[0] = "lenovo"
console.log(arr)


// -------------------------------------
const obj = {
    brand: "dell",
    country: "usa"
}

console.log(obj)
obj.brand = "lenovo"
console.log(obj)

const x = "country"
// obj.country
// obj.x = "china"
obj[x] = "china"
// obj.xchivalue = "china"
// obj.country = "china"
console.log(obj)


const num = [10, 20, 30]
for (let i = 0; i < num.length; i++) {
    console.log(num[i])
}
// OR
for (const i of num) {
    console.log(i)
}


const computer = {
    processor: "i7",
    ram: "16gb",
    ssd: "256GB",
    graphics: "4090"
}
for (const key in computer) {
    console.log(key)
    console.log(computer[key])
}