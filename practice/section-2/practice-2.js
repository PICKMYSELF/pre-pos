'use strict';
/*
function countSameElements(collection) {
  let counters = [];
  for (let element of collection) {
    let [key, count] = element.split('-');
    let existedCounter = findObj(key, counters);
    count = getCount(count);
    if (existedCounter) {
      existedCounter.count += count;
    } else {
      counters.push({key: key, count: count});
    }
  }
  return counters;
}

function findObj(key, counters) {
  for (let counter of counters) {
    if (counter.key === key) {
      return counter;
    }
  }
}

function getCount(count) {
  if (count) {
    return parseInt(count);
  }
  return 1;
}
*/

function countSameElements(collection) {
  var Count=[];
  Count[0]={};
  Count[0].key=collection[0];
  Count[0].count=1;
  var length=1;

  for(let i=1;i<collection.length;i++){
    var tempChar=collection[i].charAt(0);
    var tempCount=1;
    if (collection[i].length>1){
        tempCount=parseInt(collection[i][2]);
      }

    for(var j=0;j<Count.length;j++){

      if(tempChar==Count[j].key){
        Count[j].count+=tempCount;
        break;
      }
      if(j==length-1&&Count[j].key!=tempChar){
        Count[length]={};
        Count[length].key=tempChar;
        Count[length].count=0;//下一个j,count[length]会重复计数一次;;;对象的属性不会有初始值！！
        Count[length].count+=tempCount;
        length++;
        break;

      }
     }

  }

  return Count;
}
