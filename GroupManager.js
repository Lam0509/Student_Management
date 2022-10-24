"use strict";
exports.__esModule = true;
exports.GroupManager = void 0;
var Group_1 = require("./Group");
var GroupManager = /** @class */ (function () {
    function GroupManager() {
    }
    GroupManager.showAllGroups = function () {
        this.groups.forEach(function (group) {
            console.log("\u0110\u00E2y l\u00E0 l\u1EDBp ".concat(group.nameOfGroup));
            console.table(group.stuOfGroup);
            console.log();
        });
    };
    GroupManager.showOneGr = function (nameOfGr) {
        var index = this.findGroup(nameOfGr);
        console.log("\u0110\u00E2y l\u00E0 l\u1EDBp ".concat(GroupManager.groups[index].nameOfGroup));
        console.table(GroupManager.groups[index].stuOfGroup);
    };
    GroupManager.addGroup = function (nameOfGr) {
        this.groups.forEach(function (group) {
            if (group.nameOfGroup === nameOfGr) {
                throw new Error('Đã có lớp này rôi');
            }
        });
        var group = new Group_1.Group(nameOfGr);
        this.groups.push(group);
    };
    GroupManager.findGroup = function (nameOfGr) {
        var pos = -1;
        this.groups.forEach(function (group, index) {
            if (group.nameOfGroup === nameOfGr) {
                pos = index;
            }
        });
        return pos;
    };
    GroupManager.deleteGroup = function (nameOfGr) {
        var deleteGr = this.findGroup(nameOfGr);
        if (deleteGr !== -1)
            this.groups.splice(deleteGr, 1);
        else
            throw new Error('Không tìm thấy lớp nào');
    };
    GroupManager.editGroupName = function (nameBefore, nameAfter) {
        var editGrName = this.findGroup(nameBefore);
        if (editGrName !== -1) {
            var group = this.groups[editGrName];
            group.setGroupName(nameAfter);
            group.stuOfGroup.forEach(function (stu) {
                stu.setGroup(nameAfter);
            });
        }
        else
            throw new Error('Không tìm thây lớp nào');
    };
    GroupManager.groups = [];
    return GroupManager;
}());
exports.GroupManager = GroupManager;
