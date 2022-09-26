function compareVersions(version1, version2) {
    let verNext = version1.split(".");
    let verOld = version2.split(".");
    let result;
   for (let i=verNext.length; i <50;i++){
     verNext[i]="0"
   } 
   for (let i=verOld.length; i <50;i++){
     verOld[i]="0"
   } 
    for (let i = 0; i < 50; i++) {
      if (+verNext[i] > +verOld[i]) {
        result = true
        break
      }else if (+verNext[i] === +verOld[i]){
        result = true
      }else if(+verNext[i] < +verOld[i]){
        result = false;
        break
      } 
    }
    return result
  } 