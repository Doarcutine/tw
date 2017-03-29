let Guess = require("../guess.js");
let readlineSync = require('readline-sync');

describe("guess", () => {
    let guess;
    beforeEach(() => {
        guess = new Guess();
    });

    describe("test match", () => {
        const randomNumber = "1234";

        it("test 0A0B", () => {
            expect(guess.match("5678", randomNumber)).toBe("0A0B");
        });

        it("test 0A2B", () => {
            expect(guess.match("5643", randomNumber)).toBe("0A2B");
        });

        it("test 0A4B", () => {
            expect(guess.match("4321", randomNumber)).toBe("0A4B");
        });

        it("test 3A0B", () => {
            expect(guess.match("1235", randomNumber)).toBe("3A0B");
        });

        it("test 2A1B", () => {
            expect(guess.match("2534", randomNumber)).toBe("2A1B");
        });

        it("test 4A0B", () => {
            expect(guess.match("1234", randomNumber)).toBe("4A0B");
        });
    });

    describe("test generateRandomNumberStr", () => {

        it("test should return 4 different number", () => {
            let randomNumberArr = [0.1, 0.2, 0.3, 0.4];
            let index = 0;
            spyOn(Math, 'random').and.callFake(() => {
                return randomNumberArr[index++];
            });
            expect(guess.generateRandomNumberStr()).toBe('1234');
        });

        it("test should return 4 different number when hava the same element", () => {
            let randomNumberArr = [0.1, 0.2, 0.3, 0.3, 0.4];
            let index = 0;
            spyOn(Math, 'random').and.callFake(() => {
                return randomNumberArr[index++];
            });
            expect(guess.generateRandomNumberStr()).toBe('1234');
        });
    });

    describe("test generateInputNumberStr", () => {
        it("test input 4 different number", () => {
            spyOn(readlineSync, 'question').and.returnValue('1234');
            expect(guess.generateInputNumberStr()).toBe('1234');
        });

        it("test input 4 same number", () => {
            spyOn(readlineSync, 'question').and.returnValue('1111');
            expect(guess.generateInputNumberStr()).toBe("");
        });
    });

    describe("test judge", () => {
        it("test win", () => {
            expect(guess.judge("4A0B")).toBe("you win");
        });

        it("test lose", () => {
            expect(guess.judge("2A0B")).toBe("you lose");
        })
    })

    describe("test start", () => {
        it("test start and win", () => {
            spyOn(console, 'log');

            let randomNumberArr = [0.1, 0.2, 0.3, 0.4];
            let index = 0;
            spyOn(Math, 'random').and.callFake(() => {
                return randomNumberArr[index++];
            });

            guess.start();

            expect(console.log).toHaveBeenCalledWith('you win');
        });

        it("test start and lose", () => {
            spyOn(console, 'log');
            guess.start();
            expect(console.log).toHaveBeenCalledWith('you lose');
        });
    });
});
