'use strict';

function countSameElements(collection) {
/*  var re = {};
  for(var i=0,v,l = collection.length; v = collection[i],i<l; i++)
  {
    var rv = /^([a-z]+)(?:.+?(\d+))?/i.exec(v);
    if (!re[rv[1]])
      re[rv[1]] = 0;
    re[rv[1]] += rv[2] ? parseInt(rv[2], 10) : 1;
  }
  return re;*/
  var Count=[];
  Count[0]={};
  Count[0].name=collection[0];
  Count[0].summary=1;
  var length=1;

  for(let i=1;i<collection.length;i++){
    var tempChar=collection[i].charAt(0);
    var tempCount=1;
    if (collection[i].length==3||collection[i].length==4){
      tempCount=parseInt(collection[i][2]);
    }
    if(collection[i].length==5){
      tempCount=parseInt(collection[i].substr(2,2));
    }

    for(var j=0;j<Count.length;j++){

      if(tempChar==Count[j].name){
        Count[j].summary+=tempCount;
        break;
      }
      if(j==length-1&&Count[j].name!=tempChar){
        Count[length]={};
        Count[length].name=tempChar;
        Count[length].summary=0;//
        Count[length].summary+=tempCount;
        length++;
        break;
      }
    }

  }

  return Count;
}

