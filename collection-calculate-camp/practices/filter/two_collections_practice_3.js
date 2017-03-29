'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  //在这里写入代码
  return collection_a.filter((item) => {
    var flag = false;
    collection_b.forEach(function (itemB) {
      //console.log("now:" + item + "   ans : " + parseInt(item / itemB));
      flag = flag || (parseInt(item % itemB) === 0);
    });
    //console.log("flag:" + flag);
    return flag;
  });
}

module.exports = choose_divisible_integer;
