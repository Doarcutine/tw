'use strict';

function choose_no_repeat_number(collection) {
  var result = [];
  for(var i = 0;i<collection.length;i++) {
    if(result.indexOf(collection[i]) === -1){
      result.push(collection[i]);
    }
  }
  return result;
  //在这里写入代码
}

module.exports = choose_no_repeat_number;
