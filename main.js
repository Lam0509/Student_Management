"use strict";
exports.__esModule = true;
var Student_1 = require("./Student");
var StudentManager_1 = require("./StudentManager");
var GroupManager_1 = require("./GroupManager");
var BirthdayRegex_1 = require("./BirthdayRegex");
var EmailRegex_1 = require("./EmailRegex");
var PhoneRegex_1 = require("./PhoneRegex");
var readlineSync = require("readline-sync");
var outMenu = false;
function menu() {
    console.log('1: Hiển thị danh sách các học viên ');
    console.log('2: Chức năng theo học viên ');
    console.log('3: Chức năng theo group ');
    console.log('0: Thoát ');
}
function subMenuStu() {
    console.log('1: Thêm học viên ');
    console.log('2: Xóa học viên ');
    console.log('3: Sửa thông tin học viên ');
    console.log('4: Tìm học viên theo tên ');
    console.log('5: Xem tổng số học viên ');
    console.log('6: Sắp xếp học viên theo điểm trung bình');
    console.log('7: Số lượng học viên dựa trên học lực');
    console.log('0: Thoát ');
}
function subMenuGr() {
    console.log('1: Thêm 1 lớp ');
    console.log('2: Xóa 1 lớp ');
    console.log('3: Sửa tên lớp ');
    console.log('4: Hiển thị 1 lớp ');
    console.log('5: Hiển thị tất cả các lớp ');
    console.log('6: Sắp xếp học viên theo điểm trung bình trong tất cả các group ');
    console.log('0: Thoát ');
}
function subMenuUpdate() {
    console.log('1: Sửa tên ');
    console.log('2: Sửa điểm HK1 ');
    console.log('3: Sửa điểm HK2 ');
    console.log('0: Thoát ');
}
while (!outMenu) {
    menu();
    var number = readlineSync.question('Chọn chức năng:  ');
    switch (number) {
        case "1":
            StudentManager_1.StudentManager.getAllStu();
            break;
        case "2":
            var outMenuStu = false;
            while (!outMenuStu) {
                subMenuStu();
                var number_1 = readlineSync.question('Chọn chức năng:  ');
                switch (number_1) {
                    case "1":
                        var nameOfGrp = readlineSync.question('Nhap ten group muon them sinh vien vao:  ');
                        var index = GroupManager_1.GroupManager.findGroup(nameOfGrp);
                        try {
                            if (index !== -1) {
                                var id = +readlineSync.question('Nhap Id:  ');
                                var nameStudent = readlineSync.question('Nhap name:  ');
                                var birthday = readlineSync.question('Nhap ngay sinh:  ');
                                var email = readlineSync.question('Nhap email:  ');
                                var phone = readlineSync.question('Nhap so dien thoai:  ');
                                var scoreHK1 = +readlineSync.question('Nhap scoreHK1:  ');
                                var scoreHK2 = +readlineSync.question('Nhap scoreHK2:  ');
                                while (!BirthdayRegex_1.BirthdayRegex.validate(birthday)) {
                                    console.log('Nhap sai ngay sinh!');
                                    birthday = readlineSync.question('Nhap ngay sinh:  ');
                                }
                                while (!EmailRegex_1.EmailRegex.validate(email)) {
                                    console.log('Nhap sai email!');
                                    email = readlineSync.question('Nhap email:  ');
                                }
                                while (!PhoneRegex_1.PhoneRegex.validate(phone)) {
                                    console.log('Nhap sai so dien thoai!');
                                    phone = readlineSync.question('Nhap so dien thoai:  ');
                                }
                                var student = new Student_1.Student(id, nameStudent, birthday, email, phone, nameOfGrp, scoreHK1, scoreHK2);
                                StudentManager_1.StudentManager.add(student, GroupManager_1.GroupManager.groups[index]);
                            }
                            else
                                throw new Error('Không tìm thấy lớp nào');
                        }
                        catch (e) {
                            console.log(e.message);
                        }
                        break;
                    case "2":
                        var nameOfGr = readlineSync.question('Nhap ten group muon xoa sinh vien:  ');
                        var pos = GroupManager_1.GroupManager.findGroup(nameOfGr);
                        try {
                            if (pos !== -1) {
                                var Id = +readlineSync.question('Nhap id sinh vien muon xoa:  ');
                                StudentManager_1.StudentManager.deleteStu(Id, GroupManager_1.GroupManager.groups[pos]);
                            }
                            else
                                throw new Error("Không tìm thấy lớp nào");
                        }
                        catch (e) {
                            console.log(e.message);
                        }
                        break;
                    case "3":
                        var nameOfGroup = readlineSync.question('Nhap ten group muon sua thong tin sinh vien trong do:  ');
                        var location_1 = GroupManager_1.GroupManager.findGroup(nameOfGroup);
                        try {
                            if (location_1 !== -1) {
                                var isExist = false;
                                var id = +readlineSync.question('Nhap Id:  ');
                                while (!isExist) {
                                    subMenuUpdate();
                                    var number_2 = readlineSync.question('Chọn chức năng:  ');
                                    switch (number_2) {
                                        case "1":
                                            var nameUpd = readlineSync.question('Nhap ten muon sua:  ');
                                            StudentManager_1.StudentManager.updateStuName(id, nameUpd, GroupManager_1.GroupManager.groups[location_1]);
                                            break;
                                        case "2":
                                            var scoreHk1Upd = readlineSync.question('Nhap diem Hk1 muon sua:  ');
                                            StudentManager_1.StudentManager.updateStuScoreHk1(id, +scoreHk1Upd, GroupManager_1.GroupManager.groups[location_1]);
                                            break;
                                        case "3":
                                            var scoreHk2Upd = readlineSync.question('Nhap diem Hk2 muon sua:  ');
                                            StudentManager_1.StudentManager.updateStuScoreHk2(id, +scoreHk2Upd, GroupManager_1.GroupManager.groups[location_1]);
                                            break;
                                        case "0":
                                            isExist = true;
                                            break;
                                    }
                                }
                            }
                            else
                                throw new Error('Không tìm thấy lớp nào');
                        }
                        catch (e) {
                            console.log(e.message);
                        }
                        break;
                    case "4":
                        var nameFind = readlineSync.question('Nhap ten can tim:  ');
                        try {
                            StudentManager_1.StudentManager.searchByName(nameFind);
                        }
                        catch (e) {
                            console.log(e.message);
                        }
                        break;
                    case "5":
                        console.log(StudentManager_1.StudentManager.getTotalStudentNumber());
                        break;
                    case "6":
                        StudentManager_1.StudentManager.showRankAll();
                        break;
                    case "7":
                        StudentManager_1.StudentManager.countAcademicRanking();
                        break;
                    case "0":
                        outMenuStu = true;
                        break;
                }
            }
            break;
        case "3":
            var outMenuGr = false;
            while (!outMenuGr) {
                subMenuGr();
                var number_3 = readlineSync.question('Chọn chức năng:  ');
                switch (number_3) {
                    case "1":
                        var nameOfGrp = readlineSync.question('Nhap ten lop muon them:  ');
                        try {
                            GroupManager_1.GroupManager.addGroup(nameOfGrp);
                        }
                        catch (e) {
                            console.log(e.message);
                        }
                        break;
                    case "2":
                        var nameOfGr = readlineSync.question('Nhap ten lop muon xoa:  ');
                        try {
                            GroupManager_1.GroupManager.deleteGroup(nameOfGr);
                        }
                        catch (e) {
                            console.log(e.message);
                        }
                        break;
                    case "3":
                        var nameBefore = readlineSync.question('Nhap ten lop cu:  ');
                        var nameAfter = readlineSync.question('Nhap ten lop moi:  ');
                        try {
                            GroupManager_1.GroupManager.editGroupName(nameBefore, nameAfter);
                        }
                        catch (e) {
                            console.log(e.message);
                        }
                        break;
                    case "4":
                        var nameGrp = readlineSync.question('Nhap ten group:  ');
                        try {
                            GroupManager_1.GroupManager.showOneGr(nameGrp);
                        }
                        catch (e) {
                            console.log(e.message);
                        }
                        break;
                    case "5":
                        GroupManager_1.GroupManager.showAllGroups();
                        break;
                    case "6":
                        GroupManager_1.GroupManager.groups.forEach(function (group) {
                            group.showRank();
                        });
                        GroupManager_1.GroupManager.showAllGroups();
                        break;
                    case "0":
                        outMenuGr = true;
                        break;
                }
            }
            break;
        case "0":
            outMenu = true;
            break;
    }
}
