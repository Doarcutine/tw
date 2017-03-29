class Fizz {
    constructor(firstSpecialNumber, secondSpecialNumber, thirdSpecialNumber) {
        this.firstSpecialNumber = firstSpecialNumber;
        this.secondSpecialNumber = secondSpecialNumber;
        this.thirdSpecialNumber = thirdSpecialNumber;
    }

    static studentReport() {
        var fizz = new Fizz(3, 5, 7);
        const n = 100;
        var regFirstNumber =  fizz.firstSpecialNumber ;

        var result = [];
        for (var i = 1; i <= n; i++) {
            //单独处理
            var tempResult = "";
            if ((i.toString()).indexOf(fizz.firstSpecialNumber) !== -1) {
                tempResult = "Fizz";
            } else {
                if (i % fizz.firstSpecialNumber === 0) {
                    tempResult += "Fizz";
                }
                if (i % fizz.secondSpecialNumber === 0) {
                    tempResult += "Buzz";
                }
                if (i % fizz.thirdSpecialNumber === 0) {
                    tempResult += "Whizz";
                }
            }
            tempResult = tempResult === "" ? i : tempResult;
            console.log(tempResult);
            result.push(tempResult);
        }

        //
        // return result;
    }
}


module.exports = Fizz;