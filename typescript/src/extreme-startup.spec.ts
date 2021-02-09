import {Responder} from "./responder";

describe("extreme-startup", () => {
    test("should add numbers", () => {
        let result = new Responder().answer("what is the sum of 14 and 4");
        expect(result).toEqual("18");
    });
});
