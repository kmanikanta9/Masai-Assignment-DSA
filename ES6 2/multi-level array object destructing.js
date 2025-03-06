const people = [ { name: "Alice", address: { city: "New York", street: { name: "Broadway", number: 123 } } }, { name: "Bob", address: { city: "Los Angeles", street: { name: "Sunset Boulevard", number: 456 } } } ];
let res=[]
for (let key of people){
    let {name:firstname, address:{city, street:{name,number}}}=key
    let add=`${firstname} live in ${city} on ${name}`
    res.push(add)
}
console.log(res)