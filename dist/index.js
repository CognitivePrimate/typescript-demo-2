"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// imports
const phone_1 = require("./phone");
const flip_phone_1 = require("./flip-phone");
console.log("hello world");
// phone class
const myPhone = new phone_1.Phone("269-369-420");
console.log(myPhone);
// flipphone class
const myFlipPhone = new flip_phone_1.FlipPhone("269-369-420");
console.log(myFlipPhone);
