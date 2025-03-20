function deepClone(original){
    let clone = JSON.parse(JSON.stringify(original));
    clone.hobbies.push("coding")
    return clone

}

let original = { name: "Alice", hobbies: ["reading", "traveling"] };
console.log(original)
console.log(deepClone(original))
