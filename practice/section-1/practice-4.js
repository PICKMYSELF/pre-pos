'use strict';

function collectSameElements(collectionA, objectB) {
  var collectSame=new Array();
  for(let i=0;i<collectionA.length;i++){
    for(let j=0;j<objectB.value.length;j++){
      if(collectionA[i].key==objectB.value[j]){
        collectSame.push(collectionA[i].key);
      }
    }
  }
  return collectSame;
}
