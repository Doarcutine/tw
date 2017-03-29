'use strict';

function get_letter_interval_22(number_a, number_b) {
  //在这里写入代码
  var result = [];

  const base = 96;
  const ALPHA_NUM = 26;

  var min = number_a > number_b ? number_b : number_a;
  var max = number_a > number_b ? number_a : number_b;
  for (var i = min; i <= max; i++) {
    var tempI = i;
    var curItem = "";
    while (tempI > ALPHA_NUM) {
      curItem = curItem + String.fromCharCode((tempI - 1) / ALPHA_NUM + base);
      tempI -= ALPHA_NUM * (parseInt((tempI - 1) / ALPHA_NUM));
    }
    curItem = curItem + String.fromCharCode(tempI + base);
    result.push(curItem);
  }
  if (number_a < number_b) return result;
  else return result.reverse();
}


function get_letter_interval_2(number_a, number_b) {
  var result = [];
  var myMap = ["a", "b", "c", "d", "e", "f", 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const ALPHA_NUM = 26;

  var low = number_a > number_b ? number_b : number_a;
  var high = number_a > number_b ? number_a : number_b;

  for (var i = low; i <= high; i++) {
    var tempI = i;
    var curItem = "";
    while (tempI > 0) {
      curItem = myMap[parseInt((tempI - 1) % ALPHA_NUM)] + curItem;
      tempI = parseInt((tempI - 1)/ALPHA_NUM);
    }
    result.push(curItem);
  }

  if (number_a < number_b) return result;
  else return result.reverse();
}

module.exports = get_letter_interval_2;

