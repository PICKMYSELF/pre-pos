'use strict';
/*function countSameElements(collection) {
  // let counts = {};
  // collection.forEach(v => {
  //   if (counts[v]) {
  //     counts[v] += 1;
  //   } else {
  //     counts[v] = 1;
  //   }
  // });
  // let answer = [];
  // let keys = Object.keys(counts);
  // keys.forEach(key => {
  //   answer.push({
  //     key: key,
  //     count: counts[key]
  //   });
  // });
  // return answer;


  /!*let mySet = new Set();
  collection.forEach(element => mySet.add(element));
  let answer = [];
  mySet.forEach(element => {
    answer.push({
      key: element,
      count: 0
    });
  });
  for (let i = 0; i < answer.length; i++) {
    let count = 0;
    collection.forEach(element => {
      if (element === answer[i].key) {
        count += 1;
      }
    });
    answer[i].count = count;
  }
  return answer;

  // return [... new Set(collection)].map(element => {
  //   return {
  //     key: element,
  //     count: collection.filter(v => v === element).length
  //   }
  // })

}*/
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
/*function countSameElements(collection)
{
  var arr=[];
  arr[0]={};
  arr[0].key=collection[0];
  arr[0].count=1;
  var num=1;//计数输出数组的元素个数
  for(var i=1;i<collection.length;i++)//遍历collection数组，如果又跟arr数组里一样的，count+1，如果没有则加上两个属性
  {

    for(var j=0;j<arr.length;j++)
    {
      var judge=0;
      if(collection[i]===arr[j].key)
      {
        arr[j].count++;
        judge=1;

      }

    }
    if(judge===0)
    {   arr[num]={};
      arr[num].key=collection[i];
      arr[num].count=1;
      num++;
    }

  }
  return arr;
}*/
