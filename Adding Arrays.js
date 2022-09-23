function arrAdder(arr) {
  var someArr = "";
  for(var i = 0; i < arr[0].length; i++){
    for(var j = 0; j < arr.length; j++){
      someArr+=arr[j][i];
    }
    someArr+=" ";
  }
  return someArr.trim();
}