function gimme(triplet) {
    let someArr = triplet.slice(0);
   someArr.sort((a, b)=>{
     return a-b
   }) 
   return triplet.indexOf(someArr[1],0)
  } 