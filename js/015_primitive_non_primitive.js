const str = "dell"
// str = "hp"
const arr = [100]  // address
arr[0] = 500
console.log(arr)

const obj = { name: "ddd" }
obj.name = "kate"
console.log(obj)

function test() {
    console.log("TEST Function")
    return "hello"
}
function demo(x) {
    x()
}

// callback
demo(test)

