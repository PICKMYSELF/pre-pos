'use strict';

function createUpdatedCollection(collectionA, objectB) {

  for(let i=0;i<collectionA.length;i++){
    for(let j=0;j<objectB.value.length;j++){
      if( collectionA[i].key ===objectB.value[j]) {
        collectionA[i].count-=parseInt(collectionA[i].count/3);//js除法会变小数因为只有var一种数据类型
      }
    }
  }
  return collectionA;
}
