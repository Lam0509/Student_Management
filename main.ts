import {Student} from "./Student";
import {StudentManager} from "./StudentManager";
import {Group} from "./Group";
import {GroupManager} from "./GroupManager";
import {BirthdayRegex} from "./BirthdayRegex";
import {EmailRegex} from "./EmailRegex";
import {PhoneRegex} from "./PhoneRegex";
import * as readlineSync from "readline-sync";

let outMenu = false;

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
    menu()
    let number = readlineSync.question('Chọn chức năng:  ');
    switch (number) {
        case "1":
            StudentManager.showAllStu();
            break;
        case "2":
            let outMenuStu = false;
            while (!outMenuStu) {
                subMenuStu();
                let number = readlineSync.question('Chọn chức năng:  ');
                switch (number) {
                    case "1":
                        let nameOfGrp = readlineSync.question('Nhap ten group muon them sinh vien vao:  ');
                        let index = GroupManager.findGroup(nameOfGrp);

                        try {
                            if (index !== -1) {
                                let id = +readlineSync.question('Nhap Id:  ')
                                let nameStudent = readlineSync.question('Nhap name:  ');
                                let birthday = readlineSync.question('Nhap ngay sinh:  ');
                                let email = readlineSync.question('Nhap email:  ');
                                let phone = readlineSync.question('Nhap so dien thoai:  ');
                                let scoreHK1 = +readlineSync.question('Nhap scoreHK1:  ');
                                let scoreHK2 = +readlineSync.question('Nhap scoreHK2:  ');
                                while (!BirthdayRegex.validate(birthday)) {
                                    console.log('Nhap sai ngay sinh!');
                                    birthday = readlineSync.question('Nhap ngay sinh:  ');
                                }
                                while (!EmailRegex.validate(email)) {
                                    console.log('Nhap sai email!');
                                    email = readlineSync.question('Nhap email:  ');
                                }
                                while (!PhoneRegex.validate(phone)) {
                                    console.log('Nhap sai so dien thoai!');
                                    phone = readlineSync.question('Nhap so dien thoai:  ');
                                }
                                let student = new Student(id, nameStudent, birthday, email, phone, nameOfGrp, scoreHK1, scoreHK2);
                                StudentManager.add(student, GroupManager.groups[index]);
                            } else throw new Error('Không tìm thấy lớp nào');
                        } catch (e) {
                            console.log(e.message);
                        }

                        break;
                    case "2":
                        let nameOfGr = readlineSync.question('Nhap ten group muon xoa sinh vien:  ');
                        let pos = GroupManager.findGroup(nameOfGr);

                        try {
                            if (pos !== -1) {
                                let Id = +readlineSync.question('Nhap id sinh vien muon xoa:  ');
                                StudentManager.deleteStu(Id, GroupManager.groups[pos]);
                            } else throw new Error("Không tìm thấy lớp nào");
                        } catch (e) {
                            console.log(e.message);
                        }

                        break;
                    case "3":
                        let nameOfGroup = readlineSync.question('Nhap ten group muon sua thong tin sinh vien trong do:  ');
                        let location = GroupManager.findGroup(nameOfGroup);

                        try {
                            if (location !== -1) {
                                let isExist = false;
                                let id = +readlineSync.question('Nhap Id:  ')

                                while (!isExist) {
                                    subMenuUpdate();
                                    let number = readlineSync.question('Chọn chức năng:  ');
                                    switch (number) {
                                        case "1":
                                            let nameUpd = readlineSync.question('Nhap ten muon sua:  ');
                                            StudentManager.updateStuName(id, nameUpd, GroupManager.groups[location]);
                                            break;
                                        case "2":
                                            let scoreHk1Upd = readlineSync.question('Nhap diem Hk1 muon sua:  ');
                                            StudentManager.updateStuScoreHk1(id, +scoreHk1Upd, GroupManager.groups[location]);
                                            break;
                                        case "3":
                                            let scoreHk2Upd = readlineSync.question('Nhap diem Hk2 muon sua:  ');
                                            StudentManager.updateStuScoreHk2(id, +scoreHk2Upd, GroupManager.groups[location]);
                                            break;
                                        case "0":
                                            isExist = true;
                                            break;
                                    }
                                }
                            } else throw new Error('Không tìm thấy lớp nào');
                        } catch (e) {
                            console.log(e.message);
                        }

                        break;
                    case "4":
                        let nameFind = readlineSync.question('Nhap ten can tim:  ');
                        try {
                            StudentManager.searchByName(nameFind);
                        } catch (e) {
                            console.log(e.message);
                        }

                        break;
                    case "5":
                        console.log(StudentManager.getTotalStudentNumber());
                        break;
                    case "6":
                        StudentManager.showRankAll();
                        break;
                    case "7":
                        StudentManager.countAcademicRanking();
                        break;
                    case "0":
                        outMenuStu = true;
                        break;
                }
            }

            break;
        case "3":
            let outMenuGr = false;
            while (!outMenuGr) {
                subMenuGr();
                let number = readlineSync.question('Chọn chức năng:  ');
                switch (number) {
                    case "1":
                        let nameOfGrp = readlineSync.question('Nhap ten lop muon them:  ');
                        try {
                            GroupManager.addGroup(nameOfGrp);
                        } catch (e) {
                            console.log(e.message);
                        }

                        break;
                    case "2":
                        let nameOfGr = readlineSync.question('Nhap ten lop muon xoa:  ');
                        try {
                            GroupManager.deleteGroup(nameOfGr);
                        } catch (e) {
                            console.log(e.message);
                        }

                        break;
                    case "3":
                        let nameBefore = readlineSync.question('Nhap ten lop cu:  ');
                        let nameAfter = readlineSync.question('Nhap ten lop moi:  ');
                        try {
                            GroupManager.editGroupName(nameBefore, nameAfter);
                        } catch (e) {
                            console.log(e.message);
                        }

                        break;
                    case "4":
                        let nameGrp = readlineSync.question('Nhap ten group:  ');
                        try {
                            GroupManager.showOneGr(nameGrp);
                        } catch (e) {
                            console.log(e.message);
                        }

                        break;
                    case "5":
                        GroupManager.showAllGroups();
                        break;
                    case "6":
                        GroupManager.groups.forEach(group=>{
                            group.showRank();
                        });
                        GroupManager.showAllGroups();
                        break;
                    case "0":
                        outMenuGr = true;
                        break;
                }
            }

            break;
        case "0":
            outMenu = true;4
            break;
    }
}

