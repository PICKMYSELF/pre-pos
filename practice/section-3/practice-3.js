'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var collectionC=countSameElements(collectionA);

  for(let i=0;i<collectionC.length;i++){
    for(let j=0;j<objectB.value.length;j++){
      if( collectionC[i].key ===objectB.value[j]) {
        collectionC[i].count-=parseInt(collectionC[i].count/3);//js除法会变小数因为只有var一种数据类型
      }
    }
  }
  return collectionC;
}

function countSameElements(collection) {
  var Count = [];
  Count[0] = {};
  Count[0].key = collection[0];
  Count[0].count = 1;
  var length = 1;

  for (let i = 1; i < collection.length; i++) {
    for (var j = 0; j < Count.length; j++) {
      if (collection[i] == Count[j].key) {
        Count[j].count++;
        break;
      }
      else if (j == Count.length - 1 && Count[j].key != collection[i]) {
        Count[length] = {};
        Count[length].key = collection[i];
        Count[length].count = 1;//下一个count[length]会重复计数一次
        length++;
        break;//没break for里的Count.length 会加一个导致再执行一次上一个if再break
      }
    }

  }

  return Count;
}
