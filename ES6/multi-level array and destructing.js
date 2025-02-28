const people = [ { name: "Alice", address: { city: "New York", street: { name: "Broadway", number: 123 } } }, { name: "Bob", address: { city: "Los Angeles", street: { name: "Sunset Boulevard", number: 456 } } } ]
let res=[]
people.forEach(person=>{
    const {name,address}=person;
    const {city,street}=address;
    const {name:streetname}=street;
    res.push(`${name} lives in ${city} on ${streetname}`)
})
   
console.log(res)
