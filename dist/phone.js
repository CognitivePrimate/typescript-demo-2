"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Phone = void 0;
class Phone {
    constructor(number) {
        this.number = number;
        this.isOn = false;
    }
    // methods
    togglePower() {
        this.isOn = !this.isOn;
    }
    makeCall(person) {
        return `Hello, ${person}, how are you?`;
    }
}
exports.Phone = Phone;
