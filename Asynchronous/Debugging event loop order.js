console.log("Begin"); 
setTimeout(() => {
     console.log("Timeout Task"); 
}, 0); 
Promise.resolve("Promise Task").then((res) => { 
    console.log(res); 
}); 
console.log("End");
