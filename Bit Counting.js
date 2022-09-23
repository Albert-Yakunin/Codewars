var countBits = function(n) {
    return n.toString(2).split("").reduce((accum,item)=>{return item === "1" ? ++accum : accum},0)
   };