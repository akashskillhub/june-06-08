const arr = [10, 20, 30, 40, 50]
const rev = () => {
    const r = []
    for (let i = arr.length - 1; i >= 0; i--) {
        r.push(arr[i])
    }
    // for (let i = 0; i < arr.length; i++) {
    //     r.unshift(arr[i])
    // }
    // for (const item of arr) {
    //     r.unshift(item)
    // }
    console.log(r)
}
rev()
// [50,40,30,20,10]