// const x = "10"
// const y = 10

// const obj = {}
// const arr = []

// console.log(typeof x)  // string 
// console.log(typeof y)  // number
// console.log(typeof typeof y)   //   string 
// console.log(typeof "number")   //  string  
// console.log(typeof obj)   //   string 
// console.log(typeof arr)   //   string 

// Truthy falsy

//   T        F
/*
     1        0  
     " "      ""
            undefined
            null

    []
    {}

*/

let name = { city: "denmark" }
let x = name

if (x) {
    console.log("ok")
}

