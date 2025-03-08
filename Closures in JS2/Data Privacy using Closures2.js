function createCounter(){
    let count=0;
    function increment(){
        count++
        console.log(count)
    }
    function getCount(){
        console.log(count);
    }
    return {
        increment:increment,
        getCount:getCount
    }
}
let counter=createCounter()
counter.increment()
counter.increment()
counter.getCount()