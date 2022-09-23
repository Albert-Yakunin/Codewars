function arrAdder(arr) {
  let lengArr = arr.length;
  let finalStr = '';
  for (let b = 0; b < arr[0].length; b++) {
      for (let m = 0; m < lengArr; m++) {
          if (arr[m][b] === undefined) {
              break
          } else if (arr[m][b] === '') {
              continue
          } else {
              finalStr += arr[m][b]
          }
         
      }
      finalStr += ' ';
  }
  return finalStr.trim()
}