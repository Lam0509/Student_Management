import {Student} from "./Student";
import {Group} from "./Group";
import {GroupManager} from "./GroupManager";

export class StudentManager {
    static students: Student[] = [];

    static getAllStu(): void {
        this.students = [];
        GroupManager.groups.forEach(group=>{
            this.students = [...group.stuOfGroup, ...this.students];
        })
    }

    static showAllStu(): void {
        this.getAllStu();
        console.table(this.students);
    }

    static getTotalStudentNumber(): number {
        this.getAllStu();
        return this.students.length;
    }

    static showRankAll(): void {
        for (let i = 0; i < this.getTotalStudentNumber(); i++) {
            for (let j = i + 1; j < this.getTotalStudentNumber(); j++) {
                if (this.students[i].getAvgScore() < this.students[j].getAvgScore()) {
                    let temp = this.students[i];
                    this.students[i] = this.students[j];
                    this.students[j] = temp;
                }
            }
        }
        console.table(this.students);
    }

    static add(student: Student, group: Group): void {
        group.stuOfGroup.push(student);
    }

    static searchByName(name: string): void {
        let result = [];
        GroupManager.groups.forEach(group=>{
            group.stuOfGroup.forEach(stu=>{
                if (stu.getName() == name) {
                    result.push(stu);
                }
                }
            )
        })
        if (result.length !== 0) console.table(result);
        else throw new Error('Không tìm thấy học viên nào');
    }

    static searchById(id: number, group: Group): number {
        let pos = -1;
        group.stuOfGroup.forEach((stu, index) => {
            if (stu.getId() === id) {
                pos = index;
            }
        })
        return pos;
    }

    static deleteStu(id: number, group: Group): void {
        let deleteStuIndex = this.searchById(id, group);
        if (deleteStuIndex !== -1) group.stuOfGroup.splice(deleteStuIndex, 1);
        else throw new Error('Không tìm thấy học viên');
    }

    static updateStuName(id: number, name: string, group: Group): void {
        let updateStuName = this.searchById(id, group);
        group.stuOfGroup[updateStuName].setName(name);
    }

    static updateStuScoreHk1(id: number, scoreHk1: number, group: Group): void {
        let updateScoreHk1 = this.searchById(id, group);
        group.stuOfGroup[updateScoreHk1].setScoreHK1(scoreHk1);
    }

    static updateStuScoreHk2(id: number, scoreHk2: number, group: Group): void {
        let updateScoreHk2 = this.searchById(id, group);
        group.stuOfGroup[updateScoreHk2].setScoreHK2(scoreHk2);
    }

    static countAcademicRanking(): void {
        let hsGioi, hsKha, hsTb, hsY;
        GroupManager.groups.forEach(group=>{
            hsGioi += group.countHsGioi();
            hsKha += group.countHsKha();
            hsTb += group.countHsTrungBinh();
            hsY += group.countHsYeu();
        });
        console.log(`Số học sinh giỏi là ${hsGioi}`);
        console.log(`Số học sinh khá là ${hsKha}`);
        console.log(`Số học sinh trung bình là ${hsTb}`);
        console.log(`Số học sinh yếu là ${hsY}`);
    }
}
