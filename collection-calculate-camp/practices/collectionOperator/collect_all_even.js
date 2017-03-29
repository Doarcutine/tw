'use strict';

function collect_all_even(collection) {
/*  return collection.filter(function (item) {
    return item % 2 === 0;
  });*/

  var cartItems = [
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000003-2',
    'ITEM000005',
    'ITEM000005',
    'ITEM000005'
  ];
  cartItems.forEach(item=>{
    console.log(item.split('-'));
  })
}

module.exports = collect_all_even;
