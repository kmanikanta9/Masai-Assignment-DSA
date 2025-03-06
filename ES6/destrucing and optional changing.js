
function optional(users){
    let id=(users?.id)?users?.id:"Information not available"
    let name=(users?.profile?.name)?users?.profile?.name:"Information not available"
    let city=(users?.profile?.address?.city)?users?.profile?.address?.city:"Information not available"
    let zipcode=(users?.profile?.address?.zipcode)?users?.profile?.address?.zipcode:"Informaton not available"
    return `User ${name} (ID:${id}) lives in ${city} (ZIP:${zipcode})))`
}

const user1 = { id: 123, profile: { name: "John Doe", address: { city: "Los Angeles", zipcode: "90001" } } };
const user2 = { id: 123, profile: { name: "John Doe" } };
console.log(optional(user1))
console.log(optional(user2))