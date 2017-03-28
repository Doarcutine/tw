/**
 * Created by Doarcutine on 2017/3/28.
 */

function test() {
  results.填空题.forEach((result) => {
    standardAnswers.填空题.forEach((standardAnswer) => {
      if (result.id === standardAnswer.id) {
        standardAnswer.answer.forEach
      }
    })
  });

  results.选择题.forEach((result) => {
    standardAnswers.选择题.forEach((standardAnswer) => {
      if (result.id === standardAnswer.id && result.answer === standardAnswer.answer) {
        score += standardAnswer.score;
      }
    })
  });

  results.判断题.forEach((result) => {
    standardAnswers.判断题.forEach((standardAnswer) => {
      if (result.id === standardAnswer.id && result.answer === standardAnswer.answer) {
        score += standardAnswer.score;
      }
    })
  });

  results.简答题.forEach((result) => {
    standardAnswers.简答题.forEach((standardAnswer) => {
      if (result.id === standardAnswer.id && result.answer === standardAnswer.answer) {
        score += standardAnswer.score;
      }
    })
  });
}

//标准答案
let standardAnswers = {
  填空题: [
    {
      id: 1,
      answer: ["1"],
      score: 10
    },
    {
      id: 2,
      answer: ["2", "3", "4"],
      score: 10
    }
  ],
  选择题: [
    {
      id: 1,
      answer: ["A"],
      score: 10
    },
    {
      id: 2,
      answer: ["B"],
      score: 10
    }
  ],
  多选题: [
    {
      id: 1,
      answer: ["A", "B", "D"],
      score: 10
    },
    {
      id: 2,
      answer: ["A", "B", "C"],
      score: 10
    }
  ],
  判断题: [
    {
      id: 1,
      answer: ["A"],
      score: 10
    },
    {
      id: 2,
      answer: ["B"],
      score: 10
    }
  ],
  简答题: [
    {
      id: 1,
      answer: ["简答题"],
      score: 10
    }
  ]
};

function CompareAnswer(results) {
  let score = 0;
  Object.keys(results).forEach(questionType => {
    score += CompareAnswerDetail(results,questionType);
  });
  return score;
}

function CompareAnswerDetail(results,questionType) {
  let score = 0;

  results[questionType].forEach(item => {
    let stdAnswer = standardAnswers[questionType].find(function (temp) {
      return temp.id === item.id;
    });
    if (item.answer.toString() === stdAnswer.answer.toString()) {
      score += stdAnswer.score;
    }
  });

  return score;
}
