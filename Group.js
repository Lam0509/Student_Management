"use strict";
exports.__esModule = true;
exports.Group = void 0;
var Group = /** @class */ (function () {
    function Group(name) {
        this.stuOfGroup = [];
        this.nameOfGroup = name;
    }
    Group.prototype.getGroupName = function () {
        return this.nameOfGroup;
    };
    Group.prototype.setGroupName = function (newName) {
        this.nameOfGroup = newName;
    };
    Group.prototype.showRank = function () {
        for (var i = 0; i < this.stuOfGroup.length; i++) {
            for (var j = i + 1; j < this.stuOfGroup.length; j++) {
                if (this.stuOfGroup[i].getAvgScore() < this.stuOfGroup[j].getAvgScore()) {
                    var temp = this.stuOfGroup[i];
                    this.stuOfGroup[i] = this.stuOfGroup[j];
                    this.stuOfGroup[j] = temp;
                }
            }
        }
        console.table(this.stuOfGroup);
    };
    Group.prototype.countHsGioi = function () {
        var count = 0;
        this.stuOfGroup.forEach(function (stu) {
            if (stu.getAcademicRanking() == 'Xếp loại giỏi')
                count++;
        });
        return count;
    };
    Group.prototype.countHsKha = function () {
        var count = 0;
        this.stuOfGroup.forEach(function (stu) {
            if (stu.getAcademicRanking() == 'Xếp loại khá')
                count++;
        });
        return count;
    };
    Group.prototype.countHsTrungBinh = function () {
        var count = 0;
        this.stuOfGroup.forEach(function (stu) {
            if (stu.getAcademicRanking() == 'Xếp loại trung bình')
                count++;
        });
        return count;
    };
    Group.prototype.countHsYeu = function () {
        var count = 0;
        this.stuOfGroup.forEach(function (stu) {
            if (stu.getAcademicRanking() == 'Xếp loại yếu')
                count++;
        });
        return count;
    };
    return Group;
}());
exports.Group = Group;
