"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Forth = void 0;
class Forth {
    //the type names are named like that, so it is easier to follow along the code
    constructor() {
        this.privNumber = 0;
        this.strProtect = "any value";
        this.pubString = "";
    }
    get number() {
        return this.privNumber;
    }
    set number(number) {
        this.privNumber = number;
    }
    printPublicString() {
        console.log(this.pubString);
    }
}
exports.Forth = Forth;
Forth.sameNumber = 0;
