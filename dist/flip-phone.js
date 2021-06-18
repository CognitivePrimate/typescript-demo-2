"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlipPhone = void 0;
const phone_1 = require("./phone");
class FlipPhone extends phone_1.Phone {
    constructor(number) {
        super(number);
        this.isOpen = false;
    }
    toggleOpen() {
        this.isOpen = !this.isOpen;
    }
    makeCall(person) {
        if (this.isOpen) {
            return `Hello, ${person}, how are you?`;
        }
        else {
            return "Please open your phone";
        }
    }
}
exports.FlipPhone = FlipPhone;
