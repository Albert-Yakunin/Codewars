var number = function(busStops){
    return busStops.reduce((accum, element)=>{
     return accum = accum + element[0]- element[1]
    }, 0)
  }