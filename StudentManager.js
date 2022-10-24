"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.StudentManager = void 0;
var GroupManager_1 = require("./GroupManager");
var StudentManager = /** @class */ (function () {
    function StudentManager() {
    }
    StudentManager.getAllStu = function () {
        var _this = this;
        this.students = [];
        GroupManager_1.GroupManager.groups.forEach(function (group) {
            // group.stuOfGroup.forEach(stu=>{
            //     this.students.push(stu);
            // })
            _this.students = __spreadArray(__spreadArray([], group.stuOfGroup, true), _this.students, true);
        });
        console.table(this.students);
    };
    StudentManager.getTotalStudentNumber = function () {
        return this.students.length;
    };
    StudentManager.showRankAll = function () {
        for (var i = 0; i < this.getTotalStudentNumber(); i++) {
            for (var j = i + 1; j < this.getTotalStudentNumber(); j++) {
                if (this.students[i].getAvgScore() < this.students[j].getAvgScore()) {
                    var temp = this.students[i];
                    this.students[i] = this.students[j];
                    this.students[j] = temp;
                }
            }
        }
        console.table(this.students);
    };
    StudentManager.add = function (student, group) {
        group.stuOfGroup.push(student);
    };
    StudentManager.searchByName = function (name) {
        var result = [];
        GroupManager_1.GroupManager.groups.forEach(function (group) {
            group.stuOfGroup.forEach(function (stu) {
                if (stu.getName() == name) {
                    result.push(stu);
                }
            });
        });
        if (result.length !== 0)
            console.table(result);
        else
            throw new Error('Không tìm thấy học viên nào');
    };
    StudentManager.searchById = function (id, group) {
        var pos = -1;
        group.stuOfGroup.forEach(function (stu, index) {
            if (stu.getId() === id) {
                pos = index;
            }
        });
        return pos;
    };
    StudentManager.deleteStu = function (id, group) {
        var deleteStuIndex = this.searchById(id, group);
        if (deleteStuIndex !== -1)
            group.stuOfGroup.splice(deleteStuIndex, 1);
        else
            throw new Error('Không tìm thấy học viên');
    };
    StudentManager.updateStuName = function (id, name, group) {
        var updateStuName = this.searchById(id, group);
        group.stuOfGroup[updateStuName].setName(name);
    };
    StudentManager.updateStuScoreHk1 = function (id, scoreHk1, group) {
        var updateScoreHk1 = this.searchById(id, group);
        group.stuOfGroup[updateScoreHk1].setScoreHK1(scoreHk1);
    };
    StudentManager.updateStuScoreHk2 = function (id, scoreHk2, group) {
        var updateScoreHk2 = this.searchById(id, group);
        group.stuOfGroup[updateScoreHk2].setScoreHK2(scoreHk2);
    };
    StudentManager.countAcademicRanking = function () {
        var hsGioi, hsKha, hsTb, hsY;
        GroupManager_1.GroupManager.groups.forEach(function (group) {
            hsGioi += group.countHsGioi();
            hsKha += group.countHsKha();
            hsTb += group.countHsTrungBinh();
            hsY += group.countHsYeu();
        });
        console.log("S\u1ED1 h\u1ECDc sinh gi\u1ECFi l\u00E0 ".concat(hsGioi));
        console.log("S\u1ED1 h\u1ECDc sinh kh\u00E1 l\u00E0 ".concat(hsKha));
        console.log("S\u1ED1 h\u1ECDc sinh trung b\u00ECnh l\u00E0 ".concat(hsTb));
        console.log("S\u1ED1 h\u1ECDc sinh y\u1EBFu l\u00E0 ".concat(hsY));
    };
    StudentManager.students = [];
    return StudentManager;
}());
exports.StudentManager = StudentManager;
