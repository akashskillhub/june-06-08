const obj = {
    brand: "dell",
    country: "usa"
}

const arr = ["aaa", obj]
console.log(arr)
console.log(arr[0])
console.log(arr[1].brand)

const mobileBrnads = [
    {
        name: "apple",
        model: "14 pro max",
        features: ["ratina dispaly", "m1"]
    },
    {
        name: "samsung",
        model: "S23 pro max",
        features: ["dummy", "test"]
    },
    {
        name: "moto",
        model: "Edge pro max",
        features: ["dispaly", "camera"]
    }
]
console.log(mobileBrnads[2].name);
console.log(mobileBrnads[1].features[1]);

// apple
// camera