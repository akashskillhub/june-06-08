const obj = { fname: "john", lname: "doe", city: "london", address: "kranti chowk" }
// const city = obj.city
const { city, fname, address = "fake street", lname: siname } = obj
console.log(fname, city)
console.log(address)
console.log(siname);