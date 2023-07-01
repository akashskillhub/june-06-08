// let x = 100, y = 20
// if (x > y) {
//     console.log(x);
// } else {
//     console.log(y);
// }
const arr = [10, 5, 2, 20, 30, 0]

let temp = arr[0]

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > temp) {
        temp = arr[i]
    }
}

console.log(temp)

let n = 13
// 13 * 1
// 13 * 2
// 13 * 3
// 13 * 4
// 13 * 5 

for (let i = 1; i <= 10; i++) {
    console.log(n * i);
}