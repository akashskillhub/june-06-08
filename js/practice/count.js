const arr = ["dell", "hp", "dell", "apple"]

const getCount = arg => {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arg) {
            count++
        }
    }
    return count

}
console.log(getCount("dell"))  // Expected Output : 2

/*
    Truthy          falsy     
    1...n           0
    -1...n          
    " "             ""
    []              undefined
    {}              null
*/

const brands = ["dell", "hp", "apple", "apple", "hp", "hp"]
const getAllCount = () => {
    const obj = {}
    for (let i = 0; i < brands.length; i++) {
        (obj[brands[i]])
            ? obj[brands[i]]++
            : obj[brands[i]] = 1

    }
    return obj
}
console.log(getAllCount())
//  {dell: 1, hp:2, apple:1}
const obj = {}
let x = "msi"
// obj.msi = 50
// obj.x = 55
obj[brands[0]] = 55
console.log(obj)
console.log(brands[0])