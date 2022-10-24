export class Student {
    private id: number
    private name: string;
    private birthday: string;
    private email: string;
    private phone: string;
    private group: string;
    private scoreHK1: number;
    private scoreHK2: number;

    constructor(id: number,
                name: string,
                birthday: string,
                email: string,
                phone: string,
                group: string,
                scoreHK1: number,
                scoreHK2: number) {
        this.id = id;
        this.name = name;
        this.birthday = birthday;
        this.email = email;
        this.phone = phone;
        this.group = group;
        this.scoreHK1 = scoreHK1;
        this.scoreHK2 = scoreHK2;
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getBirthday(): string {
        return this.birthday;
    }

    getEmail(): string {
        return this.email;
    }

    getPhone(): string {
        return this.phone;
    }

    getGroup(): string {
        return this.group;
    }

    getScoreHK1(): number {
        return this.scoreHK1;
    }

    getScoreHK2(): number {
        return this.scoreHK2;
    }

    setName(name: string): void {
        this.name = name;
    }

    setGroup(nameOfGroup: string): void {
        this.group = nameOfGroup;
    }

    setScoreHK1(scoreHK1: number): void {
        this.scoreHK1 = scoreHK1;
    }

    setScoreHK2(scoreHK2: number): void {
        this.scoreHK2 = scoreHK2;
    }

    getAvgScore(): number {
        return (this.getScoreHK1() + this.getScoreHK2()) / 2;
    }

    getAcademicRanking(): string {
        if (this.getAvgScore() >= 9) return 'Xếp loại giỏi';
        else if (this.getAvgScore() >= 7) return 'Xếp loại khá';
        else if (this.getAvgScore() >= 5) return 'Xếp loại trung bình';
        else return 'Xếp loại yếu';
    }
}
