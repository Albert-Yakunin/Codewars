const tourney = array => {
    let finalArr = [];
    finalArr[0] = array.slice();
    let someArr = [];
    let helpArr = array.slice();
    for (let j = 0; helpArr.length > 1; j++) {
      if (helpArr.length % 2 !== 0) {
            someArr[0] = helpArr[helpArr.length - 1];
            helpArr.length = helpArr.length - 1;
        }
        for (let i = 0; helpArr.length > 1; i++) {
            if (helpArr[0] >= helpArr[1]) {
                someArr.push(helpArr[0])
            } else {
                someArr.push(helpArr[1])
            }
            helpArr.splice(0, 2)
        }
        finalArr.push(someArr.slice());
        helpArr = someArr.slice();
        someArr.length = 0;
    }
    return finalArr
};