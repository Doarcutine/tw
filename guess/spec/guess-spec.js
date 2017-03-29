var Guess = require("../guess.js");
Guess guess = new Guess();

describe("guess", () => {
    it("test0A0B", () => {
        expect(guess.match()).toBe("0A0B");
    })
});
