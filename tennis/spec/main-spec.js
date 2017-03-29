// var tennis = require("../tennis.js");
//
// describe("tennis", function () {
//     beforeEach(function () {
//         tennis.init();
//     });
//
//
//     it('test Love All', () => {
//         expect(tennis.number2score()).toBe("Love All");
//     });
//
//     it('test Love Fifteen', function () {
//         tennis.addScoreToRight();
//         expect(tennis.number2score()).toBe("Love Fifteen");
//     });
//
//     it('test Love Thirty', function () {
//         tennis.addScoreToRight();
//         tennis.addScoreToRight();
//         expect(tennis.number2score()).toBe("Love Thirty");
//     });
//
//     it('test Love Forty', function () {
//         tennis.addScoreToRight();
//         tennis.addScoreToRight();
//         tennis.addScoreToRight();
//         expect(tennis.number2score()).toBe("Love Forty");
//     });
//
//     it('test Fifteen Love', function () {
//         tennis.addScoreToLeft();
//         expect(tennis.number2score()).toBe("Fifteen Love");
//     });
//
//     it('test Fifteen All', function () {
//         tennis.addScoreToLeft();
//         tennis.addScoreToRight();
//         expect(tennis.number2score()).toBe("Fifteen All");
//     });
//
//     it('test Fifteen Thirty', function () {
//         tennis.addScoreToLeft();
//         tennis.addScoreToRight();
//         tennis.addScoreToRight();
//         expect(tennis.number2score()).toBe("Fifteen Thirty");
//     });
//
//     it('test Fifteen Forty', function () {
//         tennis.addScoreToLeft();
//         tennis.addScoreToRight();
//         tennis.addScoreToRight();
//         tennis.addScoreToRight();
//         expect(tennis.number2score()).toBe("Fifteen Forty");
//     });
//
//     it('test Thirty Love', function () {
//         tennis.addScoreToLeft();
//         tennis.addScoreToLeft();
//         expect(tennis.number2score()).toBe("Thirty Love");
//     });
//
//     it('test Thirty Fifteen', function () {
//         tennis.addScoreToLeft();
//         tennis.addScoreToLeft();
//         tennis.addScoreToRight();
//         expect(tennis.number2score()).toBe("Thirty Fifteen");
//     });
//
//     it('test Thirty All', function () {
//         tennis.addScoreToLeft();
//         tennis.addScoreToLeft();
//         tennis.addScoreToRight();
//         tennis.addScoreToRight();
//         expect(tennis.number2score()).toBe("Thirty All");
//     });
//
//     it('test Thirty Forty', function () {
//         tennis.addScoreToLeft();
//         tennis.addScoreToLeft();
//         tennis.addScoreToRight();
//         tennis.addScoreToRight();
//         tennis.addScoreToRight();
//         expect(tennis.number2score()).toBe("Thirty Forty");
//     });
//
//     it('test Forty Love', function () {
//         tennis.addScoreToLeft();
//         tennis.addScoreToLeft();
//         tennis.addScoreToLeft();
//         expect(tennis.number2score()).toBe("Forty Love");
//     });
//
//     it('test Forty Fifteen', function () {
//         tennis.addScoreToLeft();
//         tennis.addScoreToLeft();
//         tennis.addScoreToLeft();
//
//         tennis.addScoreToRight();
//         expect(tennis.number2score()).toBe("Forty Fifteen");
//     });
//
//     it('test Forty Thirty', function () {
//         tennis.addScoreToLeft();
//         tennis.addScoreToLeft();
//         tennis.addScoreToLeft();
//
//         tennis.addScoreToRight();
//         tennis.addScoreToRight();
//         expect(tennis.number2score()).toBe("Forty Thirty");
//     });
//
//     it('test deuce', function () {
//         tennis.addScoreToLeft();
//         tennis.addScoreToLeft();
//         tennis.addScoreToLeft();
//
//         tennis.addScoreToRight();
//         tennis.addScoreToRight();
//         tennis.addScoreToRight();
//         expect(tennis.number2score()).toBe("deuce");
//     });
//
// });
