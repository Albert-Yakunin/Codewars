function isNarcissistic(n){
    let arrNum = String(n).split('')
     let arrNumThree = arrNum.reduce((acum, item) => acum += Math.pow(item, arrNum.length), 0)
        return + arrNumThree === +n ? true : false
 }