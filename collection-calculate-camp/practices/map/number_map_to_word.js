'use strict';
var number_map_to_word = function(collection_a){
  return collection_a.map(item => (item + 65).toString());
};

module.exports = number_map_to_word;
