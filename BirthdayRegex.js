"use strict";
exports.__esModule = true;
exports.BirthdayRegex = void 0;
var BirthdayRegex = /** @class */ (function () {
    function BirthdayRegex() {
    }
    BirthdayRegex.validate = function (birthday) {
        return this.BIRTHDAY_REGEX.test(birthday);
    };
    BirthdayRegex.BIRTHDAY_REGEX = /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[012])\/\d{4}$/;
    return BirthdayRegex;
}());
exports.BirthdayRegex = BirthdayRegex;
