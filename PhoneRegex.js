"use strict";
exports.__esModule = true;
exports.PhoneRegex = void 0;
var PhoneRegex = /** @class */ (function () {
    function PhoneRegex() {
    }
    PhoneRegex.validate = function (phone) {
        return this.PHONE_REGEX.test(phone);
    };
    PhoneRegex.PHONE_REGEX = /^(\+84|0)[35789]\d{8}$/;
    return PhoneRegex;
}());
exports.PhoneRegex = PhoneRegex;
