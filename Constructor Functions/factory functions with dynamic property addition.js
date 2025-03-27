function createInventoryItem(name,category,price){
    let inventory={}
    inventory.name=name;
    inventory.category=category;
    inventory.price=price;
    inventory.describeItem=function(){
        console.log(`Item:${this.name}, Category:${this.category} Price:${this.price} `)
    }
    return inventory
}
    function addItemDiscount(item,dis){
        item.price=item.price-(item.price*dis/100)
        return {
            applyDiscount:function(){
              console.log(`Discounted Price for ${item.name}:${item.price}`)
        }
    }
    
}
const item = createInventoryItem("Laptop", "Electronics", 1500);
item.describeItem();
const discountedItem = addItemDiscount(item, 10);
discountedItem.applyDiscount()