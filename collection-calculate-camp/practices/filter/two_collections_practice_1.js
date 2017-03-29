'use strict';

function choose_common_elements(collection_a, collection_b) {
  return collection_a.filter(function (item) {
    return collection_b.indexOf(item) !== -1;
  });
  //在这里写入代码
}

module.exports = choose_common_elements;
