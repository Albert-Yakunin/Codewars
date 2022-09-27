function solve(s){
    let letterBig = 0;
      let letterSmall = 0;
      let numbers = 0;
      let sim = 0;
      for (let i of s) {
          if (i === i.toUpperCase() && !Number.isInteger(+i) && /^[a-zA-Z0-9]+$/.test(i)) {
              letterBig++
          } else if (i === i.toLowerCase() && !Number.isInteger(+i) && /^[a-zA-Z0-9]+$/.test(i)) {
              letterSmall++
          } else if (Number.isInteger(+i)) {
              numbers++
          } else {
              sim++
          }
      }
      return [letterBig, letterSmall, numbers, sim]
  }