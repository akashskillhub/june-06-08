

const users = [
    { name: "john" }, // AXAXAX
    { name: "ross" }, //XCSSC
    { name: "joe" }, // RREWEEW
]

// const x = [...users] // shalow
const x = JSON.parse(JSON.stringify(users)) // deep copy
x[0].name = "rachel"
console.log(x)
console.log(users)