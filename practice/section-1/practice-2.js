'use strict';

function collectSameElements(collectionA, collectionB) {
  var collectSame=new Array();
  for(let i=0;i<collectionA.length;i++){
    for(let j=0;j<collectionB[0].length;j++){
      if(collectionA[i]==collectionB[0][j]){
        collectSame.push(collectionA[i]);
      }
    }
  }
  return collectSame;
}
