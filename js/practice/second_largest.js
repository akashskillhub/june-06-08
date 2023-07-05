const arr = [400, 400, 30, 5, 100]

let large = arr[0], second = 0
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > large) {
        second = large
        large = arr[i]
        // with repeat values BETTER WAY
    } else if (arr[i] > second && arr[i] !== large) {
        // without repeat values
        // } else if (arr[i] > second) {
        second = arr[i]
    }
}
console.log(second)
console.log(large)