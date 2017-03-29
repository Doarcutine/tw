'use strict';

function grouping_count(collection) {
  // var result = collection.reduce(function (pre, item) {
  //   pre[item] = pre[item] || 0;
  //   pre[item] += 1;
  //   return pre;
  // }, {});
  //return result;

  return collection.reduce((pre,item)=>{
    pre[item] = pre[item] || 0;
    pre[item] += 1;
    return pre;
  },{});



  //var b = "a";
  // var a = {a:1,b:2,"1":3};
  //
  // return a.b;
  // a.1;
  // a[b];
  // a[a];

  //var test = {[b]:10};
  //return [b];

  // var foo = 'bar';
  // var baz = {foo};
  // return baz;

  //{'1':6, '2':3, '3':4, '4':2}
  /*return Object.keys(result).map(function(item) {
    return {[item]: result[item]};
  })*/
}

module.exports = grouping_count;
