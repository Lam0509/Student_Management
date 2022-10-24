import {Student} from "./Student";

export class Group {
    nameOfGroup: string;
    stuOfGroup: Student[] = [];

    constructor(name: string) {
        this.nameOfGroup = name;
    }

    getGroupName(): string {
        return this.nameOfGroup;
    }

    setGroupName(newName: string): void {
        this.nameOfGroup = newName;
    }

    showRank(): void {
        for (let i = 0; i < this.stuOfGroup.length; i++) {
            for (let j = i + 1; j < this.stuOfGroup.length; j++) {
                if (this.stuOfGroup[i].getAvgScore() < this.stuOfGroup[j].getAvgScore()) {
                    let temp = this.stuOfGroup[i];
                    this.stuOfGroup[i] = this.stuOfGroup[j];
                    this.stuOfGroup[j] = temp;
                }
            }
        }
        console.table(this.stuOfGroup);
    }

    countHsGioi(): number {
        let count = 0;
        this.stuOfGroup.forEach(stu=>{
            if (stu.getAcademicRanking() == 'Xếp loại giỏi') count++;
        })
        return count;
    }

    countHsKha(): number {
        let count = 0;
        this.stuOfGroup.forEach(stu=>{
            if (stu.getAcademicRanking() == 'Xếp loại khá') count++;
        })
        return count;
    }

    countHsTrungBinh(): number {
        let count = 0;
        this.stuOfGroup.forEach(stu=>{
            if (stu.getAcademicRanking() == 'Xếp loại trung bình') count++;
        })
        return count;
    }

    countHsYeu(): number {
        let count = 0;
        this.stuOfGroup.forEach(stu=>{
            if (stu.getAcademicRanking() == 'Xếp loại yếu') count++;
        })
        return count;
    }
}