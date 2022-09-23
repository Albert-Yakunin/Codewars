function barista(coffees){
    let arrSort = coffees.sort((a, b) => a - b);
      let result = 0;
      let timeWait = 0;
      arrSort.forEach((item, index) => {
          if (index === 0) {
              result += item
              timeWait = item
          } else {
              let sum = timeWait + 2 + item
              timeWait = sum
              result += sum
          }
      })
      return result
  }