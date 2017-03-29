var readlineSync = require('readline-sync');

class Guess {
    start() {
        console.log("The Game is start");
        const n = 6;
        var randomNumberStr = this.generateRandomNumberStr();
        var result = "";
        console.log("The Random Number Is " + randomNumberStr);
        for (var i = 0; i < n; i++) {
            var inputNumberStr = this.generateInputNumberStr();
            if(inputNumberStr === "") {
                i--;
                console.log("Please Input 4 different number");
                continue;
            }
            var matchResult = this.match(inputNumberStr, randomNumberStr);
            console.log(matchResult);
            result = this.judge(matchResult);
            if(result === "you win") {
                break;
            }
        }
        console.log(result);
    }

    generateRandomNumberStr() {
        var result = "";
        while (result.length < 4) {
            var digital = "" + parseInt(Math.random() * 10);
            if(result.indexOf(digital) === -1) {
                result += digital;
            }
        }
        return result;
    }

    generateInputNumberStr(){
        var inputNumberStr = readlineSync.question("Input a number ");
        for(var i = 0;i<inputNumberStr.length;i++) {
            if(inputNumberStr.lastIndexOf(inputNumberStr[i]) !== i) {
                return "";
            }
        }
        return inputNumberStr;
    }

    match(inputNumberStr, randomNumberStr) {

        var numberA = 0, numberB = 0;

        for (var i = 0; i < randomNumberStr.length; i++) {
            if (inputNumberStr.indexOf(randomNumberStr[i]) === -1) {
                continue;
            }
            if (inputNumberStr.indexOf(randomNumberStr[i]) === i) {
                numberA++;
            } else {
                numberB++;
            }
        }

        return numberA + "A" + numberB + "B";
    }

    judge(matchResult) {
        if (matchResult === "4A0B") {
            return "you win";
        } else {
            return "you lose";
        }
    }
}

module.exports = Guess;