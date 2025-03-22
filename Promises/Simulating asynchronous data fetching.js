function fetchData(min,max){
    let number=Math.random()*(max-min)+min
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(number>0.5){
                resolve("Fetched data successfully")
            }
            else{
                reject("Error fetching data")
            }
        },1000)
    })
}
async function fetchDataHandler(){
    try {
        let result = await fetchData(-50,50)
        console.log(result)
    }
    catch(error){
        console.log(error)
    }
}
fetchDataHandler()


