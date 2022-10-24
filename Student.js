"use strict";
exports.__esModule = true;
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(id, name, birthday, email, phone, group, scoreHK1, scoreHK2) {
        this.id = id;
        this.name = name;
        this.birthday = birthday;
        this.email = email;
        this.phone = phone;
        this.group = group;
        this.scoreHK1 = scoreHK1;
        this.scoreHK2 = scoreHK2;
    }
    Student.prototype.getId = function () {
        return this.id;
    };
    Student.prototype.getName = function () {
        return this.name;
    };
    Student.prototype.getBirthday = function () {
        return this.birthday;
    };
    Student.prototype.getEmail = function () {
        return this.email;
    };
    Student.prototype.getPhone = function () {
        return this.phone;
    };
    Student.prototype.getGroup = function () {
        return this.group;
    };
    Student.prototype.getScoreHK1 = function () {
        return this.scoreHK1;
    };
    Student.prototype.getScoreHK2 = function () {
        return this.scoreHK2;
    };
    Student.prototype.setName = function (name) {
        this.name = name;
    };
    Student.prototype.setGroup = function (nameOfGroup) {
        this.group = nameOfGroup;
    };
    Student.prototype.setScoreHK1 = function (scoreHK1) {
        this.scoreHK1 = scoreHK1;
    };
    Student.prototype.setScoreHK2 = function (scoreHK2) {
        this.scoreHK2 = scoreHK2;
    };
    Student.prototype.getAvgScore = function () {
        return (this.getScoreHK1() + this.getScoreHK2()) / 2;
    };
    Student.prototype.getAcademicRanking = function () {
        if (this.getAvgScore() >= 9)
            return 'Xếp loại giỏi';
        else if (this.getAvgScore() >= 7)
            return 'Xếp loại khá';
        else if (this.getAvgScore() >= 5)
            return 'Xếp loại trung bình';
        else
            return 'Xếp loại yếu';
    };
    return Student;
}());
exports.Student = Student;
