function openOrSenior(data){
    let output = [];
      data.forEach(element => {
          if (element[0] >= 55 && element[1] > 7) {
              output.push('Senior')
          } else {
              output.push('Open')
          }
      });
      return output
  }