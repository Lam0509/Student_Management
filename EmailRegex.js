"use strict";
exports.__esModule = true;
exports.EmailRegex = void 0;
var EmailRegex = /** @class */ (function () {
    function EmailRegex() {
    }
    EmailRegex.validate = function (email) {
        return this.EMAIL_REGEX.test(email);
    };
    EmailRegex.EMAIL_REGEX = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]+$/;
    return EmailRegex;
}());
exports.EmailRegex = EmailRegex;
