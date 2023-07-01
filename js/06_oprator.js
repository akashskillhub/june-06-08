// arithmatic

console.log(10 + 20)
console.log(10 - 20)
console.log(10 * 20)
console.log(10 / 20)
console.log(5 % 2)
console.log(5 ** 3)

const n1 = 10
const n2 = 20
const n3 = n1 + n2

let x = 50
// x = x + 100
// x = 50 + 100
// x += 100
x **= 2
console.log(x)

// precendace

//  (10 + 5) * 5
console.log((10 + 5) * 5)
// bracket
// * /   left to right
// +-   left to right

let i = 10
// i = i + 1
// i += 1
// i++
// ++i

// let j = i++
let j = ++i
console.log(j)

// comparison
console.log(10 < 5)
console.log(10 > 5)
console.log(10 == 5)
console.log(10 == "10")
console.log(10 === "10")

console.log(10 != "10")
console.log(10 !== "10")

let num1 = 10, num2 = 20

console.log(num1 > num2);
// console.log(num1 > 500  );
// AND
// OR

/*
        CONDITION 1  CONDITION 2        and         OR
         true           true           true         true
         false          false          false        false
         true           false          false        true
         false          true           false        true

         10 > 5 && 5 >100
            T       F

*/
// console.log(10 > 5 && 5 > 100)
// console.log(10 < 5 || 5 > 10)
// console.log(10 < 5 && 5 > 10)

// ternary oprator

// ?:
// 10 > 50 ? console.log("hi") : console.log("bye")
10 > 50
    ? console.log("hi")
    : console.log("bye")

const dummy = 10 > 5 ? 55 : 66
console.log(dummy)


console.log(10 >= 5)
console.log(10 >= 10)
console.log(10 <= 10)


// conditions
// if
// if else
// elseif
// fuunction
// array
// object+

// let p = 1
// p = p++
// console.log(p)
// console.log(p)

// console.log(2 ** 3)
// console.log(55 / 10)
// console.log(55 % 10)

2 <= 2 || 1 > 5
    ? console.log("hi")
    : console.log("by")