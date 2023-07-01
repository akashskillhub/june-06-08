const arr = ["task 1", "task 2", "task 3"]

function remove(index, x) {
    x.splice(index, 1)
    return x
}
const result = remove(1, arr)
console.log(result)
// Expected Output in result 👇
//           ["task 1", "task 2"]