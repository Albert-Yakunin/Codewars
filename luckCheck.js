function luckCheck(ticket) {
    console.log(ticket)
    if(/\s/.test(ticket)||isNaN(ticket)){
      throw new Error
    }
    let arr = ticket.split('');
    if (arr.length % 2 !== 0) {
      arr.splice(Math.ceil(arr.length / 2)-1, 1)
    }
    let arrOne = arr.slice(0, arr.length / 2);
    let arrTwo = arr.slice(arr.length / 2, arr.length);
    return arrOne.reduce((accum, item) => accum += +item, 0) === arrTwo.reduce((accum, item) => accum += +item, 0) ? true : false
  }