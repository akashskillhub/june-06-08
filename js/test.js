const cart = [
    { product: "keyboard", price: 500, qty: 2 },
    { product: "mouse", price: 200, qty: 1 }
]

let total = 0
for (let i = 0; i < cart.length; i++) {
    total += cart[i].price * cart[i].qty
}
// for (const item of cart) {
//     total += item.price * item.qty
// }
console.log(total)
// 700