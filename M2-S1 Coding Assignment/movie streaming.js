function watchmovies(movies){

    let maps = movies.map((ele)=>{
        ele.watchTime=(ele.watchTime/60).toFixed(2)
        let num  = Number(ele.watchTime)
        ele.watchTime = num
        return ele
    })
    let fil = maps.filter((ele)=>
         (ele.rating>7.5)) 
    let ans = fil .reduce((a,b)=>(a+b.watchTime),0)
    let mov=fil.map((ele)=>{
        return ({title:ele.title,watchTime:ele.watchTime})

    })
    return mov

}



const movie = [
    { title: "Drishyam", genre: "Thriller", rating: 8.5, watchTime: 140 },
    { title: "Lagaan", genre: "Drama", rating: 8.1, watchTime: 180 },
    { title: "Dangal", genre: "Sports", rating: 8.3, watchTime: 161 },
    { title: "Gully Boy", genre: "Musical", rating: 7.4, watchTime: 130 },
    { title: "Kabir Singh", genre: "Romance", rating: 6.9, watchTime: 150 }
  ];
console.log(watchmovies(movie))  