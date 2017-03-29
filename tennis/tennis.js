var leftScore = 0, rightScore = 0;
var scoreMap = {
  "0": "Love",
  "15": "Fifteen",
  "30": "Thirty",
  "40": "Forty"
};

var tennis = {
  number2score: function () {
    if(leftScore>=40 && rightScore>=40) {
        if(leftScore === rightScore) {
            return "deuce";
        }
    }
    return scoreMap[leftScore] + " " + (scoreMap[rightScore] === scoreMap[leftScore] ? "All" : scoreMap[rightScore]);
  },
  addScoreToLeft: function () {
    if (leftScore === 30) {
      leftScore += 10;
    } else {
      leftScore += 15;
    }
  },
  addScoreToRight: function () {
    if (rightScore === 30) {
      rightScore += 10;
    } else {
      rightScore += 15;
    }
  },
  init: function () {
    leftScore = 0;
    rightScore = 0;
  }
};

module.exports = tennis;