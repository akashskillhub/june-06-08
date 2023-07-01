
const i = 1

if (i === 1) {
    console.log("mon")
} else if (i === 2) {
    console.log("tue")
} else if (i === 3) {
    console.log("wed")
} else {
    console.log("invalid day")
}


switch (i) {
    case 1: console.log("MON"); break;
    case 2: console.log("TUE"); break;
    case 3: console.log("WED"); break;
    default: console.log("INVALID DAY")
}

let p = 10, q = 200, r = 30
switch (true) {
    case p > q && p > r: console.log("largest ", p); break
    case q > p && q > r: console.log("largest ", q); break
    default: console.log("largest ", r)
}
